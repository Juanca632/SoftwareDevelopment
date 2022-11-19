import React from 'react';
import "./ProductItem.css";
import { Link } from "react-router-dom"



const ProductItem = ({ car }) => {

    return (
        <div className="ProductItem">
			<div className='div-img'>
				<img src={car.img} alt={car.model}/>	
			</div>
			<div className="product-info">
				<div className='product-info-details'>
					<p>{car.model}</p>
				</div>
				<Link to={`/cars/${car.car_id}`} className='price'>${new Intl.NumberFormat("en-EN").format(car.price)}</Link>
			</div>
		</div>
    );
}

export { ProductItem };