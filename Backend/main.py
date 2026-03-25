from fastapi import FastAPI
import uvicorn
from app import *
from app.database.core import Base, engine
from app.controller.User.Auth_Controller import router as auth_router





app = FastAPI()
# Create all tables
Base.metadata.create_all(bind=engine)
app.include_router(auth_router)


@app.get("/")
def root():
    return {"message": "Welcome to ExamPrep API!"}

if __name__ == "__main__":
    
    uvicorn.run(app, host="0.0.0.0", port=8000, )
 
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