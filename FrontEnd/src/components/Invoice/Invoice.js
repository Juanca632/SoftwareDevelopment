import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./Invoice.css";
import Cookies from 'universal-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';

const cookies = new Cookies();
const API = "http://localhost:8000/";
const API2 = "http://localhost:8000/post/purchased";

function Invoice({ children, openInvoice, setOpenInvoice, carsDetails, priceShipping, setPriceShipping}){

    function openInvoiceFunction(){
        setOpenInvoice(false);
    }
    function purchase(){
        axios.delete(`${API}${carsDetails.car_id}`);
        const data = {
            car_id: carsDetails.car_id,
            active: "false",
            model: carsDetails.model,
            img: carsDetails.img,
            img1: "",
            img2: "",
            img3: "",
            price: carsDetails.price,
            year: carsDetails.year,
            condition: carsDetails.condition,
            type: carsDetails.type,
            country: carsDetails.country,
            weight: carsDetails.weight,
            seller: {
                user_id: carsDetails.seller.user_id,
                email: carsDetails.seller.email,
                name: carsDetails.seller.name
            },
            buyer: {
                user_id: cookies.get("id"),
                email: cookies.get("email"),
                name: cookies.get("name")
            }
          }
          axios.post(API2, data)
          .then( response =>{
          console.log(response);
          })
          Swal.fire({
            title: `You have purchased this ${carsDetails.model.toUpperCase()}`,
            icon: "success",
            confirmButtonColor: "#343a40"
          }).then((result) =>{
                window.location.href=`/my-account/purchased-cars/${cookies.get("id")}`;
          })
       
    }

    return ReactDOM.createPortal(
        <div className='modal-invoice'>
            <div className='modal-invoice-info'>
                <span onClick={openInvoiceFunction} className="span-close-invoice">X</span>
                <h2>Invoice</h2>
                <div className='invoice-info'>
                    <p>Buyer: <span>{cookies.get("name")}</span></p>
                    <p>Seller: <span>{carsDetails.seller.name}</span></p>
                    <p>Car: <span>{carsDetails.model}</span></p>
                </div>
                <div className='invoice-price'>
                    <p>Total price: <span>${new Intl.NumberFormat("en-EN").format(carsDetails.price + priceShipping)}</span></p>
                </div>
                <input
                    type="submit"
                    value="Purchase"
                    className="purchase-button"
                    onClick={purchase}
                />
            </div>
            
        </div>,
        document.getElementById("ModalInvoice")
    );
}

export { Invoice };

