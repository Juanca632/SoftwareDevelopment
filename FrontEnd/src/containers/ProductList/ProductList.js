import React from 'react';
import "./ProductList.css";
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProducts } from '../../hooks/useGetProducts';
import { SearchBar } from '../SearchBar/SearchBar';
import car1 from "../../assets/img/car-rent-1.png";
import car2 from "../../assets/img/car-rent-2.png";
import car3 from "../../assets/img/car-rent-3.png";
import car4 from "../../assets/img/car-rent-4.png";
import car5 from "../../assets/img/car-rent-5.png";
import car6 from "../../assets/img/car-rent-6.png";

const API = "http://api.escuelajs.co/api/v1/products";

const cars = [
	{
		model: "Mercedez Benz R3",
		price: 500,
		img: car1,
		id: 1
	},
	{
		model: "Mercedez Benz R3",
		price: 500,
		img: car2,
		id: 2
	},
	{
		model: "Mercedez Benz R3",
		price: 500,
		img: car3,
		id: 3
	},
	{
		model: "Mercedez Benz R3",
		price: 500,
		img: car4,
		id: 4
	},
	{
		model: "Mercedez Benz R3",
		price: 500,
		img: car5,
		id: 5
	},
	{
		model: "Mercedez Benz R3",
		price: 500,
		img: car6,
		id: 6
	}
];

const API2 = "http://localhost:8000";

const ProductList = () => {

    const products = useGetProducts(API2);
	console.log(products);
	
    return (
        <section className="main-container" id='main-container'>
			<h2>FIND YOUR CAR</h2>
			<SearchBar/>
			<div className="ProductList ">
				{products.map(car => (
					<ProductItem car={car} key={car.model} />
				))}
				
			</div>
		</section>
    );
}

export { ProductList };