from bcrypt import checkpw, gensalt, hashpw


def hash_password(password: str) -> str:
    """Hash a password for storing."""
    password_bytes = password.encode("utf-8")
    hashed_password = hashpw(password_bytes, gensalt())
    return hashed_password.decode("utf-8")


def verify_password(password: str, hashed_password: str) -> bool:
    """Verify a stored password against one provided by user."""
    password_bytes = password.encode("utf-8")
    hashed_password_bytes = hashed_password.encode("utf-8")
    return checkpw(password_bytes, hashed_password_bytes)
