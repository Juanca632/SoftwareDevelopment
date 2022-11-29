import React, { useEffect, useState } from 'react';
import "./ProductList.css";
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProducts } from '../../hooks/useGetProducts';
import { SearchBar } from '../SearchBar/SearchBar';
import { CarDetails } from '../../Pages/CarDetails/CarDetails';

const API = "http://localhost:8000";

let cars;

const ProductList = () => {


	

	const [searchWeight, setSearchWeight] = useState("DEFAULT");
	const [searchCountry, setSearchCountry] = useState("DEFAULT");
	const [searchType, setSearchType] = useState("DEFAULT");
	const [searchCondition, setSearchCondition] = useState("DEFAULT");

    cars = useGetProducts(API);
	useEffect(() => {
		const carListAPI = JSON.stringify(cars);
		localStorage.setItem("carList", carListAPI);
	})

	var intersect = function(nums1, nums2) {
		//  nums1 = [1,2,2,1], nums2 = [2,2]
	  
		// n  m
		// O(nm) + space O(min(n, m))
	  
		// preprocess nums2 to a Map<number, count>
		// O(n + m) + space(min(n, m))
		// process the shorter one
	  
		let preprocessTarget = nums1
		let loopTarget = nums2
		
		if (nums1.length > nums2.length) {
		  preprocessTarget = nums2
		  loopTarget = nums1
		}
	  
		// Map<element, number>
		const countMap = new Map()
		for (let num of preprocessTarget) {
		  if (countMap.has(num)) {
			countMap.set(num, countMap.get(num) + 1)
		  } else {
			countMap.set(num, 1)
		  }
		}
		
	  
		const result = []
		
		for (let num of loopTarget) {
		  if (countMap.has(num)) {
			result.push(num)
			
			const count = countMap.get(num)
			if (count === 1) {
			  countMap.delete(num)
			} else {
			  countMap.set(num, count - 1)
			}
		  }
		}
	  
		return result
	};

	let carsSearched = cars;
	let searchedWeight = cars;
	let searchedCountry = cars;
	let searchedType = cars;
	let searchedCondition = cars;

	if(searchWeight == "DEFAULT" && searchCountry == "DEFAULT" && searchType == "DEFAULT" && searchCondition == "DEFAULT"){
		carsSearched = cars;

	}else{
		if(!(searchWeight == "DEFAULT")){
			searchedWeight = cars.filter(car => {
				const carWeight = car.weight.toLowerCase();
				const searchWeightCar = searchWeight.toLowerCase();
				return (carWeight.includes(searchWeightCar));
			});

		}
		if(!(searchCountry == "DEFAULT")){
			searchedCountry = cars.filter(car => {
				const carCountry = car.country.toLowerCase();
				const searchCountryCar = searchCountry.toLowerCase();
				return (carCountry.includes(searchCountryCar));
			});
		}
		if(!(searchType == "DEFAULT")){
			searchedType = cars.filter(car => {
				const carType = car.type.toLowerCase();
				const searchTypeCar = searchType.toLowerCase();
				return (carType.includes(searchTypeCar));
			});
		}
		if(!(searchCondition == "DEFAULT")){
			searchedCondition = cars.filter(car => {
				const carCondition = car.condition.toLowerCase();
				const searchConditionCar = searchCondition.toLowerCase();
				return (carCondition.includes(searchConditionCar));
			});
		}
	}
	if(searchedWeight.length > 0){
		carsSearched = intersect(carsSearched,searchedWeight);
	}
	if(searchCountry.length > 0){
		carsSearched = intersect(carsSearched,searchedCountry);
	}
	if(searchType.length > 0){
		carsSearched = intersect(carsSearched,searchedType);
	}
	if(searchCondition.length > 0){
		carsSearched = intersect(carsSearched,searchedCondition);
	}
	

    return (
        <section className="main-container" id='main-container'>
			<h2 className='find-your-car'>FIND YOUR CAR</h2>
			<SearchBar searchWeight={searchWeight} setSearchWeight={setSearchWeight}
			searchCountry={searchCountry} setSearchCountry={setSearchCountry}
			searchType={searchType} setSearchType={setSearchType}
			searchCondition={searchCondition} setSearchCondition={setSearchCondition}
			/>
			<div className="ProductList ">
				{carsSearched.map(car => (
					<ProductItem car={car} key={car.car_id}/>
				))}
				
			</div>
			
		</section>
    );
}

export { ProductList, cars };