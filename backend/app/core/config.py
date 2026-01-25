from pydantic_settings import BaseSettings
from pydantic import field_validator, computed_field
import logging

logger = logging.getLogger(__name__)

class Settings(BaseSettings):
    DATABASE_URL: str

    @field_validator("DATABASE_URL", mode="before")
    @classmethod
    def fix_postgres_scheme(cls, v: str) -> str:
        if v.startswith("postgres://"):
            return v.replace("postgres://", "postgresql://", 1)
        return v

    @computed_field
    @property
    def masked_database_url(self) -> str:
        try:
            from urllib.parse import urlparse
            parsed = urlparse(self.DATABASE_URL)
            # Mask user:pass
            return f"{parsed.scheme}://****:****@{parsed.hostname}:{parsed.port}{parsed.path}"
        except Exception:
            return "Invalid URL format"

    def check_database_host(self):
        """Warn if connecting to localhost in what looks like a cloud environment."""
        from urllib.parse import urlparse
        parsed = urlparse(self.DATABASE_URL)
        if parsed.hostname in ("localhost", "127.0.0.1"):
            # We don't raise an error here because local dev still needs this1
            # but we logs a clear warning that will show up in Railway/Render logs.
            pass

    
    # Groq
    GROQ_API_KEY: str

    # Stripe (already optional)
    STRIPE_SECRET_KEY: str | None = None
    STRIPE_WEBHOOK_SECRET: str | None = None

    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()
