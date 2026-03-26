from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
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
    if not result:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="User with this email already exists."
        )
    return result


@router.post("/signin", response_model=Token)
def signin(user_request: UserSignInDTO, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    result = auth_service.signin(user_request)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password"
        )
    return result


@router.post("/refresh", response_model=Token)
def refresh_token(
    refresh_token: str,
    db: Session = Depends(get_db),
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security),
):
    auth_service = AuthService(db)
    result = auth_service.refresh_token(refresh_token)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token"
        )
    return result
