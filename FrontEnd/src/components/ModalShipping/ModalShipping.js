import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./ModalShipping.css";
import Swal from 'sweetalert2';

function ModalShipping({ children, openModal, setOpenModal, openInvoice, setOpenInvoice, priceShipping, setPriceShipping }){

    const [countryOrigin, setCountryOrigin] = useState("");
    const [countryTarget, setCountryTarget] = useState("");

    function openModalFunction(){
        setOpenModal(false);
    }
    function openInvoiceFunction(){
        if(error == false){
            setPriceShipping(price);
            setOpenModal(false);
            setOpenInvoice(true);
        }else{
            Swal.fire({
                title: "There was an error, try again",
                icon: "warning",
                confirmButtonColor: "#343a40"

            })
        }
    }
    const originCountry = (event) => {
        setCountryOrigin(event.target.value);
        
    }
    const targetCountry = (event) => {
        setCountryTarget(event.target.value);
    }

    let price = 0;
    let error = false;

    if(countryOrigin === countryTarget){
        error = true;
    }else{
        error = false;
        if(countryOrigin == "Germany" && countryTarget == "Italy"){
            price = 60000;
        }
        else if(countryOrigin == "Germany" && countryTarget == "France"){
            price = 50000;
        }
        else if(countryOrigin == "Italy" && countryTarget == "Germany"){
            price = 40000;
        }
        else if(countryOrigin == "Italy" && countryTarget == "France"){
            price = 70000;
        }
        else if(countryOrigin == "France" && countryTarget == "Germany"){
            price = 80000;
        }
        else if(countryOrigin == "France" && countryTarget == "Italy"){
            price = 30000;
        }else{
            error = true;
        }
    }

    return ReactDOM.createPortal(
        <div className='modal-shipping'>
            <div className='modal-shipping-info'>
                <span onClick={openModalFunction}>X</span>
                <h2>Shipping Options</h2>
                <div className='shipping-options'>
                    <div className='Search-bar my-5'>
                        <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"} onChange={originCountry}>
                            <option value={"DEFAULT"}>Country of origin</option>
                            <option value="Germany">Germany</option>
                            <option value="Italy">Italy</option>
                            <option value="France">France</option>
                        
                        </select>
                        <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"} onChange={targetCountry}>
                            <option value={"DEFAULT"}>Target Country</option>
                            <option value="Germany">Germany</option>
                            <option value="Italy">Italy</option>
                            <option value="France">France</option>
                        </select>
                    </div>
                    
                </div>
                {error && <p>Price: --</p>}
                {!error && <p>Price: ${new Intl.NumberFormat("en-EN").format(price)}</p>}
                
                <input
                    type="submit"
                    value="Next"
                    className="purchase-button"
                    onClick={openInvoiceFunction}
                />
                {children}

            </div>
        </div>,
        document.getElementById("ModalShipping")
    );
}

export { ModalShipping };

