from uuid import uuid4

from sqlalchemy.orm import Session

from ....DBOperations.user import UserDB
from ....DTO.Auth_Token import Token
from ....DTO.users import UserSignInDTO, UserSignUpDTO
from ....utils import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)


class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def signup(self, UserRequest: UserSignUpDTO):
        try:
            user_db = UserDB(self.db)
            existing_user = user_db.get_user_by_email(UserRequest.email)
            if existing_user:
                raise ValueError("User with this email already exists.")

            hashed_password = hash_password(UserRequest.password)
            user_data = {
                "id": uuid4(),
                "name": UserRequest.name,
                "email": UserRequest.email,
                "password": hashed_password,
                "disabled": False,
            }
            new_user = user_db.create_user(user_data)
            access_token = create_access_token(data={"sub": new_user.email})
            refresh_token = create_refresh_token(data={"sub": new_user.email})

            return Token(
                access_token=access_token,
                refresh_token=refresh_token,
                token_type="bearer",  # nosec B106
            )

        except Exception as e:
            print(f"Error occurred during signup: {e}")

    def signin(self, UserRequest: UserSignInDTO):

        try:
            user_db = UserDB(self.db)
            user = user_db.get_user_by_email(UserRequest.email)
            if not user:
                raise ValueError("Invalid email or password.")

            if not verify_password(UserRequest.password, user.password):
                raise ValueError("Invalid email or password.")

            access_token = create_access_token(data={"sub": user.email})
            refresh_token = create_refresh_token(data={"sub": user.email})

            return Token(
                access_token=access_token,
                refresh_token=refresh_token,
                token_type="bearer",  # nosec B106
            )

        except Exception as e:
            print(f"Error occurred during signin: {e}")

    def refresh_token(self, refresh_token: str):
        try:
            payload = decode_token(refresh_token)

            # Check if token type is refresh and email exists
            if payload.get("type") != "refresh":
                raise ValueError("Invalid token type.")

            email = payload.get("sub")
            if not email:
                raise ValueError("Invalid refresh token.")

            access_token = create_access_token(data={"sub": email})
            new_refresh_token = create_refresh_token(data={"sub": email})

            return Token(
                access_token=access_token,
                refresh_token=new_refresh_token,
                token_type="bearer",  # nosec B106
            )

        except Exception as e:
            print(f"Error occurred during token refresh: {e}")


# signin
# new user signup -> get the details -> store in db
# existing user raise error if email already exists


# login
# existing user -> get the details -> check if email exists in db -> if not raise error -> if exists check password -> if password is correct return success else raise error
