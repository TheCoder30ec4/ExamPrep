from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from ..config import DATA_BASE_URL
from ..utils import get_logger

logger = get_logger()

db_url = DATA_BASE_URL or "sqlite:///./test.db"
logger.info(f"Connecting to database: {db_url}")
engine = create_engine(db_url, pool_size=5, max_overflow=10)
logger.debug("SQLAlchemy engine created with pool_size=5, max_overflow=10")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
logger.debug("SessionLocal configured")
Base = declarative_base()
logger.debug("DeclarativeBase initialized")


def get_db():
    logger.debug("Creating new database session")
    db = SessionLocal()
    try:
        yield db
    finally:
        logger.debug("Closing database session")
        db.close()
