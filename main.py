from typing import List, Optional
from datetime import date, datetime
from fastapi import FastAPI, Body, status
from pydantic import BaseModel, EmailStr, Field
from uuid import UUID
import uuid
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#MODELS

# class UserBase(BaseModel):
#     user_id: UUID = Field(...)
#     email: EmailStr = Field(...)

# class UserLogin(UserBase):
#     password: str = Field(..., min_length=8, max_length=64)

# class User(UserBase):
#     first_name: str = Field(..., min_length=1, max_length=50)
#     last_name: str = Field(..., min_length=1, max_length=50)

# class UserRegister(User):
#     password: str = Field(..., min_length=8, max_length=64)

class Car(BaseModel):
    car_id: UUID = Field(...)
    model: str = Field(..., min_length=1, max_length=256)
    img: str = Field(...)
    price: float = Field(...)
    year: int = Field(...)
    condition: str = Field(...)
    type: str = Field(...)
    country: str = Field(...)
    weight: str = Field(...)


#LOGING/SIGN UP PAGE

# @app.post(
#     path="/signup",
#     response_model=User,
#     status_code=status.HTTP_201_CREATED,
#     summary="Register a User",
#     tags = ["Users"]
#     )
# def signup(user: UserRegister = Body(...)):
#     """
#     SIGN UP

#     This path operation register a user on the app

#     Parameters: 
#         - Request body parameters
#             - user: UserRegister
    
#     Returns a json with the basic user information:
#         - user_id: UUID
#         - email: Emailstr
#         - first_name: str
#         - last_name: str
#         - birth_date: date
#     """
#     with open("users.json","r+",encoding="utf-8") as f:
#         results = json.loads(f.read())
#         user_dict = user.dict()
#         user_dict["user_id"] = str(user_dict["user_id"])
#         user_dict["birth_day"] = str(user_dict["birth_day"])
#         results.append(user_dict)
#         f.seek(0)
#         f.write(json.dumps(results))
#         return user

# @app.post(
#     path="/login",
#     response_model=User,
#     status_code=status.HTTP_200_OK,
#     summary="Login a User",
#     tags=["Users"]
#     )
# def login():
#     pass

#HOME PAGE

@app.get(
    path="/",
    response_model=List[Car],
    status_code=status.HTTP_200_OK,
    summary="Show all Cars",
    tags=["Cars"]
    )
def home():
    """
    SHOW Cars   

    This path operation show all cars on the app

    Parameters:
        -None

    Returns a JSON list with all cars on the app, with the following keys:
        - car_id: UUID
        - content: str
        - created_at: datetime
        - updated_at: Optional[datetime]
        - by: User 
    """
    with open("cars.json","r",encoding="utf-8") as f:
        results = json.loads(f.read())
        return results

#SELLER MODE

# @app.get(
#     path="/sell",
#     response_model=List[Car],
#     status_code=status.HTTP_200_OK,
#     summary="Show my Cars",
#     tags=["Cars"]
# )
# def myCars():
#     pass

@app.post(
    path="/post",
    response_model=Car,
    status_code=status.HTTP_201_CREATED,
    summary="Post a Car",
    tags=["Cars"]
)
def post(car: Car = Body(...)):

    """
    POST A CAR

    This path operation post a Car on the app

    Parameters: 
        - Request body parameters
            - car: Car
    
    Returns a json with the basic tweet information:
        - car_id: UUID
        - content: str
        - created_at: datetime
        - updated_at: Optional[datetime]
        - by: User 
    """
    with open("cars.json","r+",encoding="utf-8") as f:
        results = json.loads(f.read())
        car_dict = car.dict()
        car_dict["car_id"] = str(uuid.uuid1())
        car_dict["model"] = str(car_dict["model"])
        car_dict["img"] = str(car_dict["img"])
        car_dict["price"] = float(car_dict["price"])
        car_dict["year"] = int(car_dict["year"])
        car_dict["condition"] = str(car_dict["condition"])
        car_dict["type"] = str(car_dict["type"])
        car_dict["country"] = str(car_dict["country"])
        car_dict["weight"] = str(car_dict["weight"])
        # car_dict["seller"]["user_id"] = str(uuid.uuid1())
        # car_dict["seller"]["email"] = str(car_dict["seller"]["email"])
        # car_dict["seller"]["first_name"] = str(car_dict["seller"]["first_name"])
        # car_dict["seller"]["last_name"] = str(car_dict["seller"]["last_name"])
        


        results.append(car_dict)
        f.seek(0)
        f.write(json.dumps(results))
        return car_dict

# @app.put(
#     path="/{Car_id}/update",
#     response_model=Car,
#     status_code=status.HTTP_200_OK,
#     summary="Update a Car",
#     tags=["Cars"]
# )
# def updateCar():
#     pass

# @app.delete(
#     path="/{Car_id}/delete",
#     response_model=Car,
#     status_code=status.HTTP_200_OK,
#     summary="Delete a Car",
#     tags=["Cars"]
# )
# def deleteCar():
#     pass

#BACKEND
#BACKEND
