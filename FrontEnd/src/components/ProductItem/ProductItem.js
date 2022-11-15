import React from 'react';
import "./ProductItem.css";



const ProductItem = ({ car }) => {
    return (
        <div className="ProductItem">
			<div className='div-img'>
				<img src={car.img} alt={car.title}/>	
			</div>
			<div className="product-info">
				<div className='product-info-details'>
					<p>{car.title}</p>
				</div>
				<a className='price'>${car.price}</a>
			</div>
		</div>
    );
}

export { ProductItem };