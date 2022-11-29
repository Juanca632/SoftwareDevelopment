import React from 'react';
import { useParams } from 'react-router-dom';
import "./CarDetails.css";
import { cars } from '../../containers/ProductList/ProductList';
import Cookies from 'universal-cookie';
import { useGetProducts } from '../../hooks/useGetProducts';

const API = "http://localhost:8000/";
const cookies = new Cookies();

const CarDetails = () => {

    const { slug } = useParams();
    let carList = JSON.parse(localStorage.getItem("carList"));
    
    const carsDetails = carList.find(car => car.car_id === slug );
    
    

    function purchase(){
        alert("PURCHASE");
    }
    return (


        <div className={`div-cardetails`}>

                <div className='CarDetails'>
                    <div className='details-img'>
                        <div id="carouselExampleIndicators" className="carousel slide carousel-details" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={carsDetails.img1} className="d-block w-100" alt="car-carousel-1"/>
                            </div>
                            <div className="carousel-item">
                            <img src={carsDetails.img2} className="d-block w-100" alt="car-carousel-2"/>
                            </div>
                            <div className="carousel-item">
                            <img src={carsDetails.img3} className="d-block w-100" alt="car-carousel-3"/>
                            </div>
                        </div>
                        </div>
        
                    </div>
                    <div className='details-content'>
                        <h2 className='model-car'>{carsDetails.model}</h2>
                        <div className='div-info-details'>
                            <span className='span-details'>{carsDetails.year}</span>
                            <span className='span-details'> | </span>
                            <span className='span-details'>{carsDetails.type}</span>
                            <span className='span-details'> | </span>
                            <span className='span-details'>{carsDetails.country}</span>
                            <span className='span-details'> | </span>
                            <span className='span-details'>{carsDetails.weight}</span>
                            <span className='span-details'> | </span>
                            <span className='span-details'>{carsDetails.condition}</span>
                        </div>
                        <h6>Seller: {carsDetails.seller.name}</h6>
                        <div className='details-purchase'>
                            <p className='price-purchase'>${new Intl.NumberFormat("en-EN").format(carsDetails.price)}</p>
                            {(cookies.get("id") == carsDetails.seller.user_id) ? 
                                <div className='purchase-contact'>
                                <input
                                    type="submit"
                                    value="Purchase"
                                    className="purchase-button disabled"
                                    onClick={purchase}
                                    disabled
                                />
                                <input
                                    type="submit"
                                    value="Contact"
                                    className="contact-button disabled"
                                    onClick={purchase}
                                    disabled
                                />
                                </div>
            
                            :
                            <div className='purchase-contact'>
                            <input
                                type="submit"
                                value="Purchase"
                                className="purchase-button"
                                onClick={purchase}
                            />
                            <input
                                type="submit"
                                value="Contact"
                                className="contact-button"
                                onClick={purchase}
                            />
                            </div>
                            
                            }
                            <p className='purchase-problem'>Have a problem? <span>Tell us</span></p>
                        </div>
                    </div>
                    
                </div>
                <div className='cardetails-footer'>
                    <h6>© <span className='span-footer'>Auto Shop.</span> All Rights Reserved.</h6>
                </div>
        </div>

    );
}

export { CarDetails };