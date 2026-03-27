import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi

from app.database.core import Base, engine
from app.router import api_router
from app.utils import get_logger

logger = get_logger()

app = FastAPI(
    title="ExamPrep API",
    description="ExamPrep Backend API with JWT Authentication",
    version="1.0.0",
    docs_url="/docs",
    openapi_url="/openapi.json",
    redoc_url="/redoc",
)
logger.info("FastAPI application initialized")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
logger.debug("CORS middleware configured for development")

# Drop all tables and recreate them (for development)
logger.warning("Dropping and recreating all tables (development mode)")
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
logger.info("Database tables created successfully")
app.include_router(api_router)
logger.info("API routes included")


@app.get("/")
def root():
    logger.info("Root endpoint accessed")
    return {"message": "Welcome to ExamPrep API!"}


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    logger.debug("Generating OpenAPI schema")
    openapi_schema = get_openapi(
        title="ExamPrep API",
        version="1.0.0",
        description="ExamPrep Backend API with JWT Authentication",
        routes=app.routes,
    )

    # Add security schemes for Bearer/JWT tokens
    openapi_schema["components"]["securitySchemes"] = {
        "Bearer": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
            "description": "JWT Bearer token for authentication. Get this from /auth/signin endpoint.",
        }
    }

    app.openapi_schema = openapi_schema
    logger.info("OpenAPI schema generated successfully")
    return app.openapi_schema


app.openapi = custom_openapi  # type: ignore

if __name__ == "__main__":
    logger.info("Starting ExamPrep API server on http://0.0.0.0:8000")
    uvicorn.run(
        "main:app",
        host="0.0.0.0",  # nosec B104
        port=8000,
        reload=True,
    )
