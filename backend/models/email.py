from pydantic import BaseModel
from pydantic import EmailStr


class EmailData(BaseModel):
    from_name: str
    user_email: EmailStr
    message: str
