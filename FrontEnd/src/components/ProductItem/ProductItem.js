import React from 'react';
import "./ProductItem.css";



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
				<a href='/car-details' className='price'>${car.price}</a>
			</div>
		</div>
    );
}

export { ProductItem };