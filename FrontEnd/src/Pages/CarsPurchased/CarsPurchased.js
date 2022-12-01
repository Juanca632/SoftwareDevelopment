import React, { useEffect } from 'react';
import { SettingsNavBar } from '../../containers/SettingsNavBar/SettingsNavBar';
import "./CarsPurchased.css"
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProducts } from '../../hooks/useGetProducts';
import Cookies from 'universal-cookie';
import { Footer } from '../../containers/Footer/Footer';


const cookies = new Cookies();
const API = "http://localhost:8000/cars/purchased";

const CarsPurchased = () => {
    
    const cars = useGetProducts(API);

    const purchasedCars = true;

    return (
        <div className='cars-owned'>
            <h1>Cars Purchased</h1>
            <div className="ProductList-owned">
                
				{cars.map(car => (
					(car.buyer.user_id === cookies.get("id")) && <ProductItem car={car} key={car.car_id} purchasedCars={purchasedCars}/>
				))}
				
			</div>
            <Footer/>
                
    
          
        </div>
    );
}

export { CarsPurchased };