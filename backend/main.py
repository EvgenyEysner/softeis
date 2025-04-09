import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi_mail import MessageSchema, MessageType

from backend.models.email import EmailData
from backend.services.email import FastMailService

load_dotenv()

app = FastAPI()

# --- CORS Config --- #
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/send-email")
async def email(data: EmailData, request: Request):
    recipient = os.getenv("ADMIN_EMAIL")
    try:
        message = MessageSchema(
            subject="Neue Kontaktanfrage",
            recipients=[recipient],  # Empfänger-Adresse
            template_body=data.model_dump(),
            subtype=MessageType.html,
        )

        fm = FastMailService()
        await fm.send_email(message)
        return {"message": "Email sent successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
