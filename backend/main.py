from fastapi import FastAPI
from pydantic import BaseModel
import os
import openai

openai.api_key = os.getenv("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")

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
