

class AuthService:
    def __init__(self):
        pass
    
    def signup(self, email: str,password:str, name:str):
        pass 
    
    def login(self, email: str, password: str):
        pass
    
    

# signin 
# new user signup -> get the details -> store in db
# existing user raise error if email already exists




#login
# existing user -> get the details -> check if email exists in db -> if not raise error -> if exists check password -> if password is correct return success else raise error   