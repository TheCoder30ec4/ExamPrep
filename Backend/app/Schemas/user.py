from uuid import uuid4

from sqlalchemy import TIMESTAMP, Boolean, Column, Integer, String, Uuid
from sqlalchemy.sql import func

from ..database.core import Base


class Users(Base):
    __tablename__ = "users"

    id = Column(Uuid(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    disabled = Column(Boolean, default=False)
    role_id = Column(Integer, default=2, server_default="2")
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now())
