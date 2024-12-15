from fastapi import APIRouter

# from .auth import router as auth_router

auth_router = APIRouter(prefix="/auth", tags=["auth"])
# router.include_router(auth_router)


@auth_router.get("/")
async def hello():
    return {"message": "Hello World"}


@auth_router.get("/protected")
async def protected_endpoint():
    return {"message": "This is a protected endpoint"}
