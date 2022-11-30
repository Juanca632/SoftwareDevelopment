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
    "http://localhost:3000",
    "http://localhost:3000/cars/:slug"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#MODELS

class UserBase(BaseModel):
    user_id: UUID = Field(...)
    email: EmailStr = Field(...)

class UserLogin(UserBase):
    password: str = Field(..., min_length=8, max_length=64)

class User(UserBase):
    name: str = Field(...)

class UserRegister(User):
    password: str = Field(...)

class Car(BaseModel):
    car_id: UUID = Field(...)
    active: str = Field(...)
    model: str = Field(..., min_length=1, max_length=256)
    img: str = Field(...)
    img1: str = Field(...)
    img2: str = Field(...)
    img3: str = Field(...)
    price: float = Field(...)
    year: int = Field(...)
    condition: str = Field(...)
    type: str = Field(...)
    country: str = Field(...)
    weight: str = Field(...)
    seller: User = Field(...)


#LOGING/SIGN UP PAGE

@app.post(
    path="/signup",
    response_model=UserRegister,
    status_code=status.HTTP_201_CREATED,
    summary="Register a User",
    tags = ["Users"]
    )
def signup(user: UserRegister = Body(...)):

    with open("users.json","r+",encoding="utf-8") as f:
        results = json.loads(f.read())

        user_dict = user.dict()
        user_dict["user_id"] = str(uuid.uuid1())
        user_dict["email"] = str(user_dict["email"])
        user_dict["name"] = str(user_dict["name"])
        user_dict["password"] = str(user_dict["password"])

        results.append(user_dict)
        f.seek(0)
        f.write(json.dumps(results))
        return user_dict

@app.get(
    path="/users",
    response_model=List[UserRegister],
    status_code=status.HTTP_200_OK,
    summary="Login a User",
    tags=["Users"]
    )
def login():
    with open("users.json","r",encoding="utf-8") as f:
        results = json.loads(f.read())
        return results

#HOME PAGE

@app.get(
    path="/",
    response_model=List[Car],
    status_code=status.HTTP_200_OK,
    summary="Show all Cars",
    tags=["Cars"]
    )
def home():

    with open("cars.json","r",encoding="utf-8") as f:
        results = json.loads(f.read())
        return results

#SELLER MODE

@app.post(
    path="/post",
    response_model=Car,
    status_code=status.HTTP_201_CREATED,
    summary="Post a Car",
    tags=["Cars"]
)
def post(car: Car = Body(...)):

    with open("cars.json","r+",encoding="utf-8") as f:
        results = json.loads(f.read())
        car_dict = car.dict()
        car_dict["car_id"] = str(uuid.uuid1())
        car_dict["active"] = str(car_dict["active"])
        car_dict["model"] = str(car_dict["model"])
        car_dict["img"] = str(car_dict["img"])
        car_dict["img1"] = "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        car_dict["img2"] = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        car_dict["img3"] = "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        car_dict["price"] = float(car_dict["price"])
        car_dict["year"] = int(car_dict["year"])
        car_dict["condition"] = str(car_dict["condition"])
        car_dict["type"] = str(car_dict["type"])
        car_dict["country"] = str(car_dict["country"])
        car_dict["weight"] = str(car_dict["weight"])
        car_dict["seller"]["user_id"] = str(car_dict["seller"]["user_id"])
        car_dict["seller"]["email"] = str(car_dict["seller"]["email"])
        car_dict["seller"]["name"] = str(car_dict["seller"]["name"])
        
        


        results.append(car_dict)
        f.seek(0)
        f.write(json.dumps(results))
        return car_dict

@app.delete(
    path="/{car_id}",
    response_model=str,
    status_code=status.HTTP_200_OK,
    summary="Delete a Car",
    tags=["Cars"]
)
def deleteCar(car_id: str):
    with open("cars.json","r+",encoding="utf-8") as f:
        results = json.loads(f.read())
        x = -1
        index = 0
        for i in results:
            x = x + 1
            if(i["car_id"] == car_id):
                index = x
        results[index]["active"] = "false"
        f.seek(0)
        f.write(json.dumps(results))
        return str(results)

@app.put(
    path="/post/{car_id}",
    response_model=str,
    status_code=status.HTTP_200_OK,
    summary="Update a Car",
    tags=["Cars"]
)
def updateCar(car_id:str, car: Car):
    with open("cars.json","r+",encoding="utf-8") as f:
        results = json.loads(f.read())
        x = -1
        index = 0
        for i in results:
            x = x + 1
            if(i["car_id"] == car_id):
                index = x
        car_dict = car.dict()

        car_dict["car_id"] = str(car_dict["car_id"])
        car_dict["active"] = str(car_dict["active"])
        car_dict["model"] = str(car_dict["model"])
        car_dict["img"] = str(car_dict["img"])
        car_dict["img1"] = "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        car_dict["img2"] = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        car_dict["img3"] = "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        car_dict["price"] = float(car_dict["price"])
        car_dict["year"] = int(car_dict["year"])
        car_dict["condition"] = str(car_dict["condition"])
        car_dict["type"] = str(car_dict["type"])
        car_dict["country"] = str(car_dict["country"])
        car_dict["weight"] = str(car_dict["weight"])
        car_dict["seller"]["user_id"] = str(car_dict["seller"]["user_id"])
        car_dict["seller"]["email"] = str(car_dict["seller"]["email"])
        car_dict["seller"]["name"] = str(car_dict["seller"]["name"])

        results[index] = car_dict
        # results[index]["model"] = car_dict["model"]
        # results[index]["price"] = car_dict["price"]
        # results[index]["year"] = car_dict["year"]
        # results[index]["condition"] = car_dict["condition"]
        # results[index]["type"] = car_dict["type"]
        # results[index]["country"] = car_dict["country"]
        # results[index]["weight"] = car_dict["weight"]
        f.seek(0)
        f.write(json.dumps(results))
        return str(results)
