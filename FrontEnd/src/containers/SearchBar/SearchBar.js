import React from 'react';
import "./SearchBar.css";


const SearchBar = () => {
    return (
        <div className='Search-bar my-5'>
            <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"}>
                <option value={"DEFAULT"}>Weight</option>
                <option value="1">Light</option>
                <option value="2">Heavy</option>
            
            </select>
            <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"}>
                <option value={"DEFAULT"}>Country</option>
                <option value="1">Germany</option>
                <option value="2">Italy</option>
                <option value="3">France</option>
            </select>
            <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"}>
                <option value={"DEFAULT"}>Type</option>
                <option value="1">Specials</option>
                <option value="2">Sport Cars</option>
                <option value="3">Family Cars</option>
            </select>
            <select className="form-select" aria-label="Default select example" defaultValue={"DEFAULT"}>
                <option value={"DEFAULT"}>Condition</option>
                <option value="1">New</option>
                <option value="2">Used</option>
            </select>
        </div>
    );
}
export { SearchBar };