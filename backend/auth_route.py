from fastapi import APIRouter, HTTPException
from fastapi import status
from database import Base, engine, Session
from schemas import SignUpModel
from models import User, UserBase, UserIn, UserOut
from werkzeug.security import generate_password_hash, check_password_hash

# from .auth import router as auth_router

auth_router = APIRouter(prefix="/auth", tags=["auth"])
# router.include_router(auth_router)

session = Session(bind=engine)


@auth_router.get("/")
async def hello():
    return {"message": "Hello World"}


@auth_router.get("/protected")
async def protected_endpoint():
    return {"message": "This is a protected endpoint"}


@auth_router.post("/signup", response_model=UserOut)
async def signup(user: UserIn):
    """
    Register a new user if the email and username do not already exist.
    """
    # Check if the user already exists with this email
    email_exists = session.query(User).filter_by(email=user.email).first()
    if email_exists:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User with this email already exists",
        )

    # Check if the user already exists with this username
    username_exists = session.query(User).filter_by(username=user.username).first()
    if username_exists:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Username already taken"
        )

    # If user does not exist, create a new user
    new_user = User(**user.dict())
    new_user.password = generate_password_hash(user.password)
    session.add(new_user)
    session.commit()
    session.refresh(new_user)
    return new_user
