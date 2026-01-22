# Health AI Concierge Platform 🏥🤖

A comprehensive AI-powered healthcare platform combining instant patient triage, appointment booking, and clinic management.

![Status](https://img.shields.io/badge/Status-Completed-success)
![Stack](https://img.shields.io/badge/Stack-React%20|%20FastAPI%20|%20AI-blue)

## 🌟 Key Features

### 1. 🧠 AI Smart Triage (Hero Widget)
- **Instant Risk Assessment**: Users describe symptoms, and the AI determines urgency (Low/Medium/High).
- **Live Interaction**: "Chat with AI" interface on the landing page.
- **Explainability**: Confidence scores and reasoning provided for every AI diagnosis.

### 2.  portals & Dashboards
- **Patient Portal**: View appointment timeline, past diagnoses, and medical records.
- **Doctor Finder**: AI-matched doctor recommendations based on symptoms.
- **Admin Dashboard**: "Mission Control" for clinic staff to view live metrics, bookings, and chat logs.

### 3. 🚀 Advanced Capabilities
- **🗣️ Voice Output**: The AI concierge speaks responses (Text-to-Speech).
- **📄 Document Analysis**: Upload PDF medical reports for instant AI summarization (RAG).
- **💳 Payment Simulation**: Integrated "Stripe-like" checkout flow for appointments.
- **🔔 Notifications**: Simulated SMS/WhatsApp alerts for booking confirmations.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TailwindCSS (Styled with Glassmorphism & Modern UI principles).
- **Backend**: Python FastAPI, SQLAlchemy, SQLite (Development).
- **AI/ML**: Custom Logic / Mock LLM Integration, `pypdf` for document parsing.
- **DevOps**: Docker ready (Dockerfiles included).

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### 1. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
*Server runs at `http://localhost:8000`*

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
*App runs at `http://localhost:5173`*

---

## 📂 Project Structure

```
ai-concierge-platform/
├── backend/             # FastAPI Server
│   ├── app/
│   │   ├── api/         # Endpoints (Chat, Booking, Admin)
│   │   ├── models/      # Database Models
│   │   └── services/    # AI, PDF, & Business Logic
│   └── main.py          # Entry point
│
├── frontend/            # React Application
│   ├── src/
│   │   ├── components/  # Reusable UI (HeroWidget, PaymentModal)
│   │   ├── pages/       # Routes (Landing, Booking, Dashboard)
│   │   └── services/    # API connectors
│
└── README.md            # You are here
```

## 🔒 Security & Compliance
- **Data Privacy**: Built with HIPAA-compliant architecture principles.
- **Audit Logs**: All admin actions andsensitive data access are logged.

## 👥 Authors
- **Vardhan** - *Lead Developer*

---
*Built with ❤️ for the future of healthcare.*
