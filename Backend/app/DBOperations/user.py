from app.Schemas import Users as User


class UserDB:
    def __init__(self, db):
        self.db = db

    def get_user_by_email(self, email):
        return self.db.query(User).filter(User.email == email).first()

    def create_user(self, user_data):
        new_user = User(**user_data)
        self.db.add(new_user)
        self.db.commit()
        self.db.refresh(new_user)
        return new_user

    def update_user(self, email, update_data):
        user = self.db.query(User).filter(User.email == email).first()
        if user:
            for key, value in update_data.items():
                setattr(user, key, value)
            self.db.commit()
            self.db.refresh(user)
            return user
        return None
