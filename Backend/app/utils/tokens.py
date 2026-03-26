from datetime import datetime, timedelta

import jwt
from pytz import timezone  # type: ignore

from app.config import Settings


def create_access_token(data: dict):

    encode_data = data.copy()
    expire = datetime.now(timezone("Asia/Kolkata")) + timedelta(
        minutes=Settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )
    encode_data.update({"exp": expire, "type": "access"})
    return jwt.encode(encode_data, Settings.SECRET_KEY, algorithm=Settings.ALGORITHM)


def create_refresh_token(data: dict):
    encode_data = data.copy()
    expire = datetime.now(timezone("Asia/Kolkata")) + timedelta(
        minutes=Settings.REFRESH_TOKEN_EXPIRE_MINUTES
    )
    encode_data.update({"exp": expire, "type": "refresh"})
    return jwt.encode(encode_data, Settings.SECRET_KEY, algorithm=Settings.ALGORITHM)


def decode_token(token: str) -> dict:  # type: ignore
    try:
        algorithms = [Settings.ALGORITHM] if Settings.ALGORITHM else ["HS256"]
        decoded_data = jwt.decode(token, Settings.SECRET_KEY, algorithms=algorithms)
        return decoded_data
    except jwt.ExpiredSignatureError:
        raise ValueError("Token has expired.")
    except jwt.InvalidTokenError:
        raise ValueError("Invalid token.")
