from uuid import UUID

from pydantic import BaseModel, EmailStr


class UserSignUpDTO(BaseModel):
    id: UUID
    name: str
    email: EmailStr
    password: str
    disabled: bool = False


class UserSignInDTO(BaseModel):
    email: EmailStr
    password: str
