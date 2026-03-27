from uuid import uuid4

from sqlalchemy.orm import Session

from ....DBOperations.user import UserDB
from ....DTO.Auth_Token import Token
from ....DTO.users import UserSignInDTO, UserSignUpDTO
from ....utils import (
    create_access_token,
    create_refresh_token,
    decode_token,
    get_logger,
    hash_password,
    verify_password,
)

logger = get_logger()


class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def signup(self, UserRequest: UserSignUpDTO):
        try:
            logger.debug(f"Signup service: Checking if user exists for email {UserRequest.email}")
            user_db = UserDB(self.db)
            existing_user = user_db.get_user_by_email(UserRequest.email)
            if existing_user:
                logger.warning(
                    f"Signup service: User with email {UserRequest.email} already exists"
                )
                raise ValueError("User with this email already exists.")

            logger.debug(f"Signup service: Hashing password for user {UserRequest.email}")
            hashed_password = hash_password(UserRequest.password)
            user_data = {
                "id": uuid4(),
                "name": UserRequest.name,
                "email": UserRequest.email,
                "password": hashed_password,
                "disabled": False,
            }
            logger.debug(f"Signup service: Creating new user in database for {UserRequest.email}")
            new_user = user_db.create_user(user_data)
            logger.info(f"Signup service: New user created successfully with ID {new_user.id}")

            logger.debug(
                f"Signup service: Generating access and refresh tokens for {UserRequest.email}"
            )
            access_token = create_access_token(data={"sub": new_user.email})
            refresh_token = create_refresh_token(data={"sub": new_user.email})
            logger.debug("Signup service: Tokens generated successfully")

            return Token(
                access_token=access_token,
                refresh_token=refresh_token,
                token_type="bearer",  # nosec B106
            )

        except Exception as e:
            logger.error(
                f"Error occurred during signup for {UserRequest.email}: {e}", exc_info=True
            )

    def signin(self, UserRequest: UserSignInDTO):
        try:
            logger.debug(f"Signin service: Looking up user with email {UserRequest.email}")
            user_db = UserDB(self.db)
            user = user_db.get_user_by_email(UserRequest.email)
            if not user:
                logger.warning(f"Signin service: User not found for email {UserRequest.email}")
                raise ValueError("Invalid email or password.")

            logger.debug(f"Signin service: Verifying password for user {UserRequest.email}")
            if not verify_password(UserRequest.password, user.password):
                logger.warning(f"Signin service: Invalid password for user {UserRequest.email}")
                raise ValueError("Invalid email or password.")

            logger.debug(
                f"Signin service: Generating access and refresh tokens for {UserRequest.email}"
            )
            access_token = create_access_token(data={"sub": user.email})
            refresh_token = create_refresh_token(data={"sub": user.email})
            logger.info(f"Signin service: User successfully authenticated {UserRequest.email}")

            return Token(
                access_token=access_token,
                refresh_token=refresh_token,
                token_type="bearer",  # nosec B106
            )

        except Exception as e:
            logger.error(
                f"Error occurred during signin for {UserRequest.email}: {e}", exc_info=True
            )

    def refresh_token(self, refresh_token: str):
        try:
            logger.debug("Refresh token service: Decoding refresh token")
            payload = decode_token(refresh_token)

            # Check if token type is refresh and email exists
            if payload.get("type") != "refresh":
                logger.warning("Refresh token service: Invalid token type")
                raise ValueError("Invalid token type.")

            email = payload.get("sub")
            if not email:
                logger.warning("Refresh token service: No email found in refresh token")
                raise ValueError("Invalid refresh token.")

            logger.debug(f"Refresh token service: Generating new tokens for {email}")
            access_token = create_access_token(data={"sub": email})
            new_refresh_token = create_refresh_token(data={"sub": email})
            logger.info(f"Refresh token service: Tokens refreshed successfully for {email}")

            return Token(
                access_token=access_token,
                refresh_token=new_refresh_token,
                token_type="bearer",  # nosec B106
            )

        except Exception as e:
            logger.error(f"Error occurred during token refresh: {e}", exc_info=True)


# signin
# new user signup -> get the details -> store in db
# existing user raise error if email already exists


# login
# existing user -> get the details -> check if email exists in db -> if not raise error -> if exists check password -> if password is correct return success else raise error
