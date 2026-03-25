from pydantic import BaseModel, EmailStr
from uuid import UUID


class UserSignUpDTO(BaseModel):
    
    id: UUID
    name: str
    email: EmailStr
    password: str 
    

class UserSignInDTO(BaseModel):
    email: EmailStr
    password: str
    