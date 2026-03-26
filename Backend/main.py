import uvicorn
from app.database.core import Base, engine
from app.router import api_router
from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

app = FastAPI(
    title="ExamPrep API",
    description="ExamPrep Backend API with JWT Authentication",
    version="1.0.0",
    docs_url="/docs",
    openapi_url="/openapi.json",
    redoc_url="/redoc",
)
# Drop all tables and recreate them (for development)
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
app.include_router(api_router)


@app.get("/")
def root():
    return {"message": "Welcome to ExamPrep API!"}


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

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
    return app.openapi_schema


app.openapi = custom_openapi  # type: ignore

if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",  # nosec B104
        port=8000,
    )

# from app import get_logger

# def main():
#     logger = get_logger()

#     logger.debug("This is a DEBUG message")
#     logger.info("This is an INFO message")
#     logger.warning("This is a WARNING message")
#     logger.error("This is an ERROR message")
#     logger.critical("This is a CRITICAL message")

#     try:
#         1 / 0
#     except ZeroDivisionError as e:
#         logger.exception(e)

# if __name__ == "__main__":
#     main()
