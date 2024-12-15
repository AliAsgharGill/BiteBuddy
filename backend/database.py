from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


# Replace this with your actual database password
password = "newpassword"

# Correct the username from "postgre" to "postgres"
engine = create_engine(
    f"postgresql://postgres:{password}@localhost:5432/bitebuddy", echo=True
)

Base = declarative_base()

# Configure the session
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
