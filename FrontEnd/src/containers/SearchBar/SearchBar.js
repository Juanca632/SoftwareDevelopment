import React, { useState } from 'react';
import "./SearchBar.css";


const SearchBar = ({ searchWeight, setSearchWeight, searchCountry, setSearchCountry, searchType, setSearchType, searchCondition, setSearchCondition }) => {

    const onSearchWeight = (event) => {
        setSearchWeight(event.target.value);
    }
    const onSearchCountry = (event) => {
        setSearchCountry(event.target.value);
    }
    const onSearchType = (event) => {
        setSearchType(event.target.value)
    }
    const onSearchCondition = (event) => {
        setSearchCondition(event.target.value);
    }


    return (
        <div className='Search-bar my-5'>
            <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"} onChange = {onSearchWeight}>
                <option value={"DEFAULT"}>Weight</option>
                <option value="Light">Light</option>
                <option value="Heavy">Heavy</option>
            
            </select>
            <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"} onChange = {onSearchCountry}>
                <option value={"DEFAULT"}>Country</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
                <option value="France">France</option>
            </select>
            <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"} onChange = {onSearchType}>
                <option value={"DEFAULT"}>Type</option>
                <option value="Special Cars">Special Cars</option>
                <option value="Sport Cars">Sport Cars</option>
                <option value="Family Cars">Family Cars</option>
            </select>
            <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"} onChange = {onSearchCondition}>
                <option value={"DEFAULT"}>Condition</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
            </select>
        </div>
    );
}
export { SearchBar };