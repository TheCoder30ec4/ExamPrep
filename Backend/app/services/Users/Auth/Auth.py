from sqlalchemy.orm import Session
from ....DTO.users import UserSignInDTO, UserSignUpDTO
from ....Schemas import Users
from uuid import uuid4
from sqlalchemy.sql import func
from ....utils import hash_password, verify_password


from ....Schemas import Users


class AuthService:
    def __init__(self, db: Session):
        self.db = db
    
    def signup(self,UserRequest: UserSignUpDTO):
        
        new_user = Users(
            id = uuid4(),
            name=UserRequest.name,
            email=UserRequest.email,
            password=hash_password(UserRequest.password),
            created_at = func.now()
        )
        self.db.add(new_user)
        self.db.commit()
        self.db.refresh(new_user)
        return new_user

    def signin(self, UserRequest: UserSignInDTO):
        
        try:
            user = self.db.query(Users).filter(Users.email == UserRequest.email).first()
            if user is None:
                raise ValueError("User with this email does not exist.")
            if not verify_password(UserRequest.password, user.password):
                raise ValueError("Incorrect password.")
            return user
        
        except Exception as e:
            print(f"Error occurred while fetching user: {e}")
    
    

# signin 
# new user signup -> get the details -> store in db
# existing user raise error if email already exists




#login
# existing user -> get the details -> check if email exists in db -> if not raise error -> if exists check password -> if password is correct return success else raise error   