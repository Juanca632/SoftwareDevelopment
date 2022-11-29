import React, { useEffect } from 'react';
import { SettingsNavBar } from '../../containers/SettingsNavBar/SettingsNavBar';
import "./CarsOwned.css";
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProducts } from '../../hooks/useGetProducts';
import Cookies from 'universal-cookie';
import { Footer } from '../../containers/Footer/Footer';


const cookies = new Cookies();
const API = "http://localhost:8000";

const CarsOwned = () => {
    
    const cars = useGetProducts(API);
    useEffect(() => {
		const carListAPI = JSON.stringify(cars);
		localStorage.setItem("carList", carListAPI);
	})
    const deleteUpdate = true;

    return (
        <div className='cars-owned'>
            <h1>Cars Owned</h1>
            <div className="ProductList-owned">
                
				{cars.map(car => (
					(car.seller.user_id === cookies.get("id")) && <ProductItem car={car} key={car.car_id} deleteUpdate={deleteUpdate}/>
				))}
				
			</div>
            <Footer/>
                
    
          
        </div>
    );
}

export { CarsOwned };