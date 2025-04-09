import os

from dotenv import load_dotenv
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from pydantic import SecretStr

load_dotenv()


class FastMailService:
    client: FastMail

    def __init__(self):
        self.client = self.create_client()

    @classmethod
    def create_client(cls) -> FastMail:

        config = ConnectionConfig(
            MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
            MAIL_PASSWORD=SecretStr(os.getenv("MAIL_PASSWORD")),
            MAIL_FROM=os.getenv("MAIL_FROM"),
            MAIL_PORT=int(os.getenv("MAIL_PORT")),
            MAIL_SERVER=os.getenv("MAIL_SERVER"),
            MAIL_STARTTLS=True,
            MAIL_SSL_TLS=False,
            USE_CREDENTIALS=True,
            TEMPLATE_FOLDER="templates/email",
        )

        return FastMail(config)

    def create_message(
        self, subject: str, recipients: list, body: dict
    ) -> MessageSchema:
        return MessageSchema(
            subject=subject,
            recipients=recipients,
            template_body=body,
            subtype=MessageType.html,
        )

    async def send_email(
        self,
        message: MessageSchema,
    ) -> None:
        """
        Send an email.
        Args:
            message (MessageSchema): The message to send.
        """

        await self.client.send_message(message, "contact_email.html")
