from ..database.core import Base 
from uuid import uuid4
from sqlalchemy import Column, String, TIMESTAMP, Uuid
from sqlalchemy.sql import func


class Users(Base):
    __tablename__ = "users"
    
    id = Column(Uuid(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now())