from fastapi import FastAPI
from pydantic import BaseModel
import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

class Query(BaseModel):
    query: str

@app.post("/chat")
async def chat(query: Query):
    # For now, simple OpenAI completion (later: integrate Argo dataset RAG)
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "system", "content": "You are an ocean data assistant for the Indian Ocean (Argo dataset)."},
                  {"role": "user", "content": query.query}]
    )
    return {"answer": response["choices"][0]["message"]["content"]}
