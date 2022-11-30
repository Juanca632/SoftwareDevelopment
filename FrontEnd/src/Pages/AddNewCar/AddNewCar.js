import React, { useRef } from 'react';
import "./AddNewCar.css"
import { SettingsNavBar } from '../../containers/SettingsNavBar/SettingsNavBar';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const API = "http://localhost:8000/post";

const AddNewCar = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form.current);
      const data = {
        car_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        active: "true",
        model: formData.get("model"),
        img: formData.get("img"),
        img1: "",
        img2: "",
        img3: "",
        price: formData.get("price"),
        year: formData.get("year"),
        condition: formData.get("condition"),
        type: formData.get("type"),
        country: formData.get("country"),
        weight: formData.get("weight"),
        seller: {
            user_id: cookies.get("id"),
            email: cookies.get("email"),
            name: cookies.get("name")
        }
      }
      if(formData.get("model") == "" || formData.get("img") == "" || formData.get("price") == "" || formData.get("year") == "" || formData.get("condition") == "" || formData.get("type") == "" || formData.get("country") == "" || formData.get("weight") == ""){
        alert("Complete all the fields");
      }else{
        axios.post(API, data)
        .then( response =>{
          console.log(response);
        })
        alert("New Car Created");
        window.location.href=`/my-account/cars-owned/${cookies.get("id")}`;

      }
      
    }


    return (
        <div className='add-new-car'>
            <SettingsNavBar/>
            <div className='add-new-car-content'>
                <h1>Add New Car</h1>
                    <div className='add-new-car-form'>
                            <div className="">
                                <form action="/" className="form" ref={form}>
                                <div>
                                    <label htmlFor="model" className="">
                                    Model
                                    </label>
                                    <input
                                    type="text"
                                    name="model"
                                    placeholder="Mercedez Benz"
                                    className=""
                                    />
                                    <label htmlFor="img" className="">
                                    Img
                                    </label>
                                    <input
                                    type="url"
                                    name="img"
                                    placeholder="https://img.com"
                                    className=""
                                    />
                                    <label htmlFor="price" className="">
                                    Price
                                    </label>
                                    <input
                                    type="number"
                                    name="price"
                                    placeholder="$500,000"
                                    className=""
                                    />
                                    <label htmlFor="year" className="">
                                    Year
                                    </label>
                                    <input
                                    type="number"
                                    name="year"
                                    placeholder="2020"
                                    className=""
                                    />
                                    <label htmlFor="condition" className="">
                                    Condition
                                    </label>
                                    <input
                                    type="text"
                                    name="condition"
                                    placeholder="New/used"
                                    className=""
                                    />
                                    <label htmlFor="type" className="">
                                    Type
                                    </label>
                                    <input
                                    type="text"
                                    name="type"
                                    placeholder="Special Cars / Sport Cars / Family Cars"
                                    className=""
                                    />
                                    <label htmlFor="country" className="">
                                    Country
                                    </label>
                                    <input
                                    type="text"
                                    name="country"
                                    placeholder="Germany / Italy / France"
                                    className=""
                                    />
                                    <label htmlFor="weight" className="">
                                    Weight
                                    </label>
                                    <input
                                    type="text"
                                    name="weight"
                                    placeholder="Light / Heavy"
                                    className=""
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Create"
                                    className="button-add-new-car"
                                    onClick={handleSubmit}
                                    
                                />
                                </form>
                        </div>
                        
                    </div>
                </div>
            </div>
    );
}

export { AddNewCar };