# 🌊 Ocean Chatbot

This repo contains a full-stack chatbot that answers questions about **Indian Ocean Argo data**.

## Stack
- **Frontend:** React + Vite (deployed on Vercel)
- **Backend:** FastAPI (deployed on Render, non-Docker)
- **Database:** PostgreSQL (Render)

## Setup
1. Install dependencies for frontend and backend.
2. Set environment variables from `.env.example`.
3. Run backend: `uvicorn backend.main:app --reload`
4. Run frontend: `npm run dev` inside `frontend`.

## Deployment
- Frontend is deployed automatically to Vercel via GitHub Actions.
- Backend is deployed to Render using non-Docker service.

See `.github/workflows/deploy.yml` for CI/CD setup.

## Env Vars
See `.env.example` for all required keys.
