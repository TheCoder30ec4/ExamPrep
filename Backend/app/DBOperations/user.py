from app.Schemas import Users as User
from app.utils import get_logger

logger = get_logger()


class UserDB:
    def __init__(self, db):
        self.db = db

    def get_user_by_email(self, email):
        logger.debug(f"Querying user by email: {email}")
        user = self.db.query(User).filter(User.email == email).first()
        if user:
            logger.debug(f"User found for email: {email}")
        else:
            logger.debug(f"No user found for email: {email}")
        return user

    def create_user(self, user_data):
        logger.debug(f"Creating new user with email: {user_data.get('email')}")
        new_user = User(**user_data)
        self.db.add(new_user)
        self.db.commit()
        self.db.refresh(new_user)
        logger.info(f"User created successfully with ID: {new_user.id}, Email: {new_user.email}")
        return new_user

    def update_user(self, email, update_data):
        logger.debug(f"Updating user with email: {email}")
        user = self.db.query(User).filter(User.email == email).first()
        if user:
            for key, value in update_data.items():
                setattr(user, key, value)
            self.db.commit()
            self.db.refresh(user)
            logger.info(f"User updated successfully: {email}")
            return user
        else:
            logger.warning(f"User not found for update: {email}")
        return None
