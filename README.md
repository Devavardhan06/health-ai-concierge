🏥 AI Concierge Platform (Healthcare)
An AI-powered clinic concierge platform that automates patient interactions, appointment booking, payments, and admin operations — built with FastAPI, RAG, and secure backend architecture.
This system is designed with compliance, safety, and scalability in mind, making it suitable for real-world healthcare use cases.
🚀 Key Features
🤖 AI Concierge (RAG-powered)
Conversational AI for clinic queries
Retrieval-Augmented Generation (RAG) using clinic knowledge
TF-IDF–based chunk retrieval
Strict response grounding (no hallucinations)
🛡️ Compliance & Safety Engine
Detects medical risk keywords (pregnancy, allergies, chronic conditions)
Blocks unsafe responses
Automatically escalates to human staff when needed
Protects clinic legally and ethically
📅 Booking & Scheduling System
Real-time appointment slot availability
Buffer time enforcement
Slot conflict prevention
Google Calendar integration
Cancellation & rescheduling rules
💳 Payment Orchestration
Secure Stripe payment integration
Payment links generated inside conversation
Webhook-based payment confirmation
Audit-safe and idempotent design
🧑‍⚕️ Admin Dashboard APIs
Manage bookings & payments
Review chat logs
Update clinic knowledge base
Handle escalations manually
Monitor analytics and system health
📊 Analytics & Audit Logging
Track bookings, chats, payments, escalations
Conversion and drop-off insights
Immutable audit logs for compliance
Admin-only analytics endpoints
🔐 Security & Reliability
Rate limiting (chat, booking, payment, admin)
Role-based access control (admin vs user)
Webhook signature verification
Global exception handling
Environment-based secret management
🧱 Tech Stack
Layer	Technology
Backend API	FastAPI
Database	PostgreSQL
ORM	SQLAlchemy
AI / LLM	Groq API
RAG	TF-IDF Retrieval
Payments	Stripe
Calendar	Google Calendar API
Rate Limiting	SlowAPI
Auth	Role-based access (RBAC)
Deployment-ready	Yes
📂 Project Structure
backend/
├── app/
│   ├── api/
│   │   ├── chat.py
│   │   ├── booking.py
│   │   ├── payment.py
│   │   ├── webhook.py
│   │   └── admin/
│   ├── services/
│   │   ├── llm_service.py
│   │   ├── rag_service.py
│   │   ├── compliance_service.py
│   │   ├── booking_service.py
│   │   ├── payment_service.py
│   │   ├── audit_service.py
│   │   └── analytics_service.py
│   ├── models/
│   ├── schemas/
│   ├── core/
│   │   ├── config.py
│   │   ├── rate_limiter.py
│   │   └── security.py
│   ├── db/
│   │   └── session.py
│   └── knowledge/
│       └── clinic_data.txt
├── main.py
├── requirements.txt
└── README.md
⚙️ Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/ai-concierge-platform.git
cd backend
2️⃣ Create virtual environment
python3 -m venv venv
source venv/bin/activate
3️⃣ Install dependencies
pip install -r requirements.txt
4️⃣ Environment variables
Create a .env file (do not commit this):
DATABASE_URL=postgresql://user:password@localhost:5432/ai_concierge
GROQ_API_KEY=your_groq_key
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
A .env.example is provided for reference.
5️⃣ Run the server
uvicorn main:app --reload
🔍 API Documentation
Once running, open:
http://127.0.0.1:8000/docs
Interactive Swagger UI is enabled.
🧪 Rate Limiting Rules
Endpoint	Limit
Chat API	10 requests / minute
Booking API	5 requests / minute
Payment API	3 requests / minute
Admin APIs	5 requests / minute
🛑 Compliance & Escalation Example
User:
“I’m diabetic, can I get fillers?”
System behavior:
Risk detected
AI response blocked
Escalation triggered
Human staff notified
🔐 Security Practices
Secrets stored in environment variables
.env, credentials, and keys ignored via .gitignore
Stripe webhook signature verification
Audit logs for every critical action
Rate limiting against abuse
📈 Future Enhancements
Frontend dashboard (React / Next.js)
Redis-based distributed rate limiting
Background jobs (Celery / RQ)
Multi-clinic support
Conversation state machine
SLA-based escalation alerts
🧠 Learning Outcomes
This project demonstrates:
Real-world backend architecture
AI + compliance design
Secure payment workflows
Production-grade API engineering
Healthcare-safe AI integration

👤 Author
Gatla Devavardhan (gatladevavardhan@gmail.com)
Backend & AI Engineer
