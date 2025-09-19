from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Ocean Chatbot backend is running"}
