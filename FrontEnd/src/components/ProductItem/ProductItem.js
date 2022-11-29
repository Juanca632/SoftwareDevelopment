import React from 'react';
import "./ProductItem.css";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import { CarDetails } from '../../Pages/CarDetails/CarDetails';



const ProductItem = ({ car, deleteUpdate }) => {


	function deleteUpdateFunction(){
		Swal.fire({
			title: `What you want to do with this ${car.model.toUpperCase()}?`,
			icon: "question",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Edit',
			confirmButtonColor: "#343a40",
			denyButtonText: `Delete`,
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
			  Swal.fire('Saved!', '', 'success')
			} else if (result.isDenied) {
			  Swal.fire({
				title: `Are you sure you want to delete this ${car.model.toUpperCase()}?`,
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: 'Ok',
				confirmButtonColor: "#DC3741",
			  })
			}
		  })
	}
    return (
        <div className="ProductItem">
			{deleteUpdate && <span className='span-deleteUpdate' onClick={deleteUpdateFunction}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>pencil</title>
<path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
</svg></span>}
			<div className='div-img' >
				<img src={car.img} alt={car.model}/>	
			</div>
			<div className="product-info">
				<div className='product-info-details'>
					<p className='car-model'>{car.model}</p>
					<p className='car-info-categories'>{`${car.year} | ${car.type} | ${car.country} | ${car.weight} | ${car.condition}`}</p>
				</div>
	
				<Link to={`/cars/${car.car_id}`} className='price'>${new Intl.NumberFormat("en-EN").format(car.price)}</Link>
			</div>
		</div>
    );
}

export { ProductItem };