from ...services import AuthService
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ...database.core import get_db
from ...DTO.users import UserSignUpDTO, UserSignInDTO

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/signup")
def signup(user_request: UserSignUpDTO, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    new_user = auth_service.signup(user_request)
    return {"message": "User signed up successfully", "user": new_user}

@router.post("/signin")
def signin(user_request: UserSignInDTO, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    user = auth_service.signin(user_request)
    if user:
        return {"message": "User signed in successfully", "user": user}
    else:
        return {"message": "Invalid email or password"}