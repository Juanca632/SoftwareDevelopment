import React from 'react';
import "./ProductList.css";
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProducts } from '../../hooks/useGetProducts';
import { SearchBar } from '../SearchBar/SearchBar';

const API = "http://localhost:8000";

let cars;

const ProductList = () => {

    cars = useGetProducts(API);
	
    return (
        <section className="main-container" id='main-container'>
			<h2 className='find-your-car'>FIND YOUR CAR</h2>
			<SearchBar/>
			<div className="ProductList ">
				{cars.map(car => (
					<ProductItem car={car} key={car.car_id} />
				))}
				
			</div>
		</section>
    );
}

export { ProductList, cars };