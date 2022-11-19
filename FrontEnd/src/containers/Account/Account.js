import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Account = ({ userAccount }) => {

    const signOut = () =>{
        cookies.remove("id", {path: "/"});
        cookies.remove("email", {path: "/"});
        cookies.remove("name", {path: "/"});
        window.location.href="/";
    }

    return (
        <div>
            <h1>{cookies.get("id")}</h1>
            <h1>{cookies.get("name")}</h1>
            <h1>{cookies.get("email")}</h1>
            <button onClick={signOut}>Sign Out</button>
        </div>
        );
}

export { Account };