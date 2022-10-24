from typing import List
from fastapi import FastAPI, Body, status
from pydantic import BaseModel
from uuid import UUID

app = FastAPI()

#MODELS
class Vehiculo(BaseModel):

    vehiculo_id: UUID
    uso: str           #(nuevo, usado)
    tipo: str          #(ligero, pesado, especiales, agricola, otros)
    origen: str        #(nacional, internacional)
    costo_vehiculo: float
    
class Persona(BaseModel):

    first_name: str 
    last_name: str
    persona_id: UUID
    
class Cliente(Persona):
    direccion_cliente: str

class Vendedor(Persona):
    direccion_vendedor: str

class Envio(BaseModel):
    cliente: Cliente
    vendedor: Vendedor
    costo_envio: float
    
class Compra(BaseModel):

    compra_id: UUID
    comprador: Cliente
    envio: Envio 
    total_compra: float

class Facturar(BaseModel):
    compra: Compra


#LOGING/SIGN UP PAGE

@app.post(
    path="/signup",
    response_model=Persona,
    status_code=status.HTTP_201_CREATED,
    summary="Register a User",
    tags = ["Users"]
    )
def signup():
    pass

@app.post(
    path="/login",
    response_model=Persona,
    status_code=status.HTTP_200_OK,
    summary="Login a User",
    tags=["Users"]
    )
def login():
    pass

#HOME PAGE

@app.get(
    path="/",
    response_model=List[Vehiculo],
    status_code=status.HTTP_200_OK,
    summary="Show all Cars",
    tags=["Cars"]
    )
def home():
    pass

#SELLER MODE

@app.get(
    path="/sell",
    response_model=List[Vehiculo],
    status_code=status.HTTP_200_OK,
    summary="Show my Cars",
    tags=["Cars"]
)
def myCars():
    pass

@app.put(
    path="/{vehiculo_id}/update",
    response_model=Vehiculo,
    status_code=status.HTTP_200_OK,
    summary="Update a Car",
    tags=["Cars"]
)
def updateCar():
    pass

@app.delete(
    path="/{vehiculo_id}/delete",
    response_model=Vehiculo,
    status_code=status.HTTP_200_OK,
    summary="Delete a Car",
    tags=["Cars"]
)
def deleteCar():
    pass