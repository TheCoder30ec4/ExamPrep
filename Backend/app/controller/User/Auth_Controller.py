from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from ...database.core import get_db
from ...DTO.Auth_Token import Token
from ...DTO.users import UserSignInDTO, UserSignUpDTO
from ...services import AuthService
from ...utils import get_logger

logger = get_logger()
router = APIRouter(prefix="/auth", tags=["auth"])
security = HTTPBearer()


@router.post("/signup", response_model=Token)
def signup(user_request: UserSignUpDTO, db: Session = Depends(get_db)):
    logger.info(f"Signup request received for email: {user_request.email}")
    auth_service = AuthService(db)
    result = auth_service.signup(user_request)
    if not result:
        logger.warning(f"Signup failed: User with email {user_request.email} already exists")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="User with this email already exists."
        )
    logger.info(f"User successfully signed up: {user_request.email}")
    return result


@router.post("/signin", response_model=Token)
def signin(user_request: UserSignInDTO, db: Session = Depends(get_db)):
    logger.info(f"Signin request received for email: {user_request.email}")
    auth_service = AuthService(db)
    result = auth_service.signin(user_request)
    if not result:
        logger.warning(f"Signin failed: Invalid credentials for email {user_request.email}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password"
        )
    logger.info(f"User successfully signed in: {user_request.email}")
    return result


@router.post("/refresh", response_model=Token)
def refresh_token(
    refresh_token: str,
    db: Session = Depends(get_db),
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security),
):
    logger.info("Token refresh request received")
    auth_service = AuthService(db)
    result = auth_service.refresh_token(refresh_token)
    if not result:
        logger.warning("Token refresh failed: Invalid refresh token")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token"
        )
    logger.info("Token refreshed successfully")
    return result
