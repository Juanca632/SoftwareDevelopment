from fastapi import FastAPI
from pydantic import BaseModel

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


@app.get("/")
def home():
    pass