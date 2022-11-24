import React from 'react';
import Cookies from 'universal-cookie';
import "./General.css";
import { SettingsNavBar } from '../../containers/SettingsNavBar/SettingsNavBar';

const cookies = new Cookies();

const General = ({ userAccount }) => {

    const signOut = () =>{
        cookies.remove("id", {path: "/"});
        cookies.remove("email", {path: "/"});
        cookies.remove("name", {path: "/"});
        window.location.href="/";
    }

    return (
        <div className='Settings'>
            <SettingsNavBar/>
            <div className='settings-content'>
                <h1>GENERAL</h1>
                <div className='settings-general-content'>
                    <div className='settings-content-info'>
                        <p>Name: {cookies.get("name")}</p>
                        <p>Email: {cookies.get("email")}</p>
                        <p>Country: Germany</p>
                        <p>Status: Active</p>
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                    <div className='settings-content-img'>
                        <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </div>

                </div>
                
    
            </div>
        </div>
        );
}

export { General };