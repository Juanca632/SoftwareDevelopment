import React from 'react';
import "./SettingsNavBar.css"
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const SettingsNavBar = () => {
    return (
        <div className='settings-bar'>
            <span className='settings-bar-span'>Settings</span>
            <Link className='settings-bar-link' to={`/my-account/general/${cookies.get("id")}`}>General</Link>
            <span className='settings-bar-span'>My cars</span>
            <Link className='settings-bar-link' to={`/my-account/cars-owned/${cookies.get("id")}`}>Owned</Link>
            <Link className='settings-bar-link' to={`/my-account/purchased-cars/${cookies.get("id")}`}>Purchased</Link>
            <span className='settings-bar-span'>More Options</span>
            <Link className='settings-bar-link' to={`/my-account/add-new-car/${cookies.get("id")}`}>Add New Car</Link>
            <Link className='settings-bar-link' to={`/my-account/delete-car/${cookies.get("id")}`}>Delete Car</Link>
        </div>
    );
}

export { SettingsNavBar };