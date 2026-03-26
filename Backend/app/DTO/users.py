from pydantic import BaseModel, EmailStr


class UserSignUpDTO(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserSignInDTO(BaseModel):
    email: EmailStr
    password: str
