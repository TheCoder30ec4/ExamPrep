import inspect
from pathlib import Path
from threading import Lock

from loguru import logger as _loguru_logger


class FileTrackingLogger:
    """Logger that tracks file transitions and creates separate log files per module."""

    def __init__(self):
        self.previous_module = None
        self.lock = Lock()
        self.registered_modules = set()

        # Create logs directory
        backend_dir = Path(__file__).parent.parent.parent
        self.logs_dir = backend_dir / "logs"
        self.logs_dir.mkdir(exist_ok=True)

        # Remove loguru's default handler and add a styled console sink
        _loguru_logger.remove()
        _loguru_logger.add(
            sink=lambda msg: print(msg, end=""),
            format=(
                "<green>[{time:YYYY-MM-DD HH:mm:ss}]</green> "
                "<level>[{level}]</level> "
                "{file}:{line} → {message}"
            ),
            colorize=True,
            level="DEBUG",
        )

    def _get_calling_module_name(self) -> str:
        """Get the name of the module that called the logger."""
        frame = inspect.currentframe()
        try:
            for _ in range(10):
                frame = frame.f_back
                if frame is None:
                    break
                file_path = frame.f_globals.get("__file__", "")
                if file_path and "logger.py" not in file_path:
                    try:
                        return Path(file_path).stem
                    except (ValueError, AttributeError):
                        continue
            return "unknown"
        finally:
            del frame

    def _ensure_file_sink(self, module_name: str):
        """Register a rotating file sink for a module if not already registered."""
        if module_name in self.registered_modules:
            return

        log_file = self.logs_dir / f"{module_name.lower()}_log.log"
        _loguru_logger.add(
            sink=str(log_file),
            format="[{time:YYYY-MM-DD HH:mm:ss}] [{level}] {file}:{line} → {message}",
            level="DEBUG",
            rotation="5 MB",
            retention=5,
            filter=lambda record, mod=module_name: record["extra"].get("module") == mod,
        )
        self.registered_modules.add(module_name)

    def get_logger(self):
        """Get a bound logger for the calling module."""
        with self.lock:
            current_module = self._get_calling_module_name()
            self._ensure_file_sink(current_module)

            # Log module transition
            if self.previous_module and self.previous_module != current_module:
                _loguru_logger.bind(module=self.previous_module).info(
                    f"→ Execution has been moved to {current_module}"
                )
                _loguru_logger.bind(module=current_module).info(
                    f"← Execution started from {self.previous_module}"
                )

            if current_module != self.previous_module:
                self.previous_module = current_module

            return _loguru_logger.bind(module=current_module)

    def log_transition(self, from_module: str, to_module: str):
        """Explicitly log a transition between two modules."""
        with self.lock:
            self._ensure_file_sink(from_module)
            self._ensure_file_sink(to_module)
            _loguru_logger.bind(module=from_module).info(
                f"→ Execution has been moved to {to_module}"
            )
            _loguru_logger.bind(module=to_module).info(
                f"← Execution started from {from_module}"
            )


# Global instance
_logger_manager = FileTrackingLogger()


def get_logger():
    """Get a loguru logger bound to the calling module."""
    return _logger_manager.get_logger()


def log_transition(from_module: str, to_module: str):
    """Explicitly log a transition between modules.

    Usage:
        from app.utils.logger import log_transition
        log_transition('service_file', 'controller_file')
    """
    _logger_manager.log_transition(from_module, to_module)