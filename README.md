# Exam Helper

A minimal React (Vite) frontend and FastAPI backend.

## Requirements

- Node.js 20.19+ or 22.12+ (LTS recommended)
- Python 3.11+ (3.12 or 3.13 recommended)

## Run locally

From the project root, start the backend:

```sh
python3 -m venv backend/.venv
source backend/.venv/bin/activate
python -m pip install -r backend/requirements.txt
python -m uvicorn app.main:app --app-dir backend --reload
```

In another terminal, start the frontend:

```sh
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).
API documentation is at http://127.0.0.1:8000/docs.

Vite forwards `/api` requests to the backend on port 8000 during development.
For production, serve `frontend/dist` and route `/api` to FastAPI using your hosting platform or reverse proxy.

## Structure

```text
backend/
  app/main.py          # API routes
  requirements.txt     # Python dependencies
frontend/
  src/App.jsx          # React app with an API request
  vite.config.js       # Development API proxy
```

## Checks

```sh
cd frontend
npm run build
```

With the backend running, `curl http://127.0.0.1:8000/api/health`
returns `{"status":"ok"}`.
