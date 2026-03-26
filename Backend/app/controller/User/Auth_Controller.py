from typing import Optional

from fastapi import APIRouter, Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from ...database.core import get_db
from ...DTO.Auth_Token import Token
from ...DTO.users import UserSignInDTO, UserSignUpDTO
from ...services import AuthService

router = APIRouter(prefix="/auth", tags=["auth"])
security = HTTPBearer()


@router.post("/signup", response_model=Token)
def signup(user_request: UserSignUpDTO, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    result = auth_service.signup(user_request)
    if result:
        return {"message": "User signed up successfully", "user": result}
    else:
        return {"message": "User with this email already exists."}


@router.post("/signin", response_model=Token)
def signin(user_request: UserSignInDTO, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    result = auth_service.signin(user_request)
    if result:
        return {"message": "User signed in successfully", "user": result}
    else:
        return {"message": "Invalid email or password"}


@router.post("/refresh", response_model=Token)
def refresh_token(
    refresh_token: str,
    db: Session = Depends(get_db),
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security),
):
    auth_service = AuthService(db)
    result = auth_service.refresh_token(refresh_token)
    if result:
        return {"message": "Token refreshed successfully", "token": result}
    else:
        return {"message": "Invalid refresh token"}
