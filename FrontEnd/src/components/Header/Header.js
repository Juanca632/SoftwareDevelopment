import React, { useState } from 'react';
import "./Header.css";
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const cookies = new Cookies();

const Header = () => {


    const [toggle, setToggle] = useState(true);
    const [toggleAccount, setToggleAccount] = useState(false);
    // if(!(cookies.get("id") === undefined)){
    //   setToggle(!toggle);
    //   setToggleAccount(!toggleAccount);
    //   console.log("HOLAA");
    // }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Auto Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="header-home nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/#main-container">
                Shop
              </a>
              {(cookies.get("id") === undefined)  && <a className="nav-link" href="/login">
                Login
              </a>}
              {(cookies.get("id") === undefined)  && <a className="nav-link" href="/signup">
                Sign Up
              </a>}
              {!(cookies.get("id") === undefined) && 
              <div className='div-icon-profil'>
                <Link className="nav-link" to={`/my-account/${cookies.get("id")}`}>{cookies.get("email")}</Link>
                <img className='icon-profil' src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"/>
              </div>
              }
            </div>
          </div>
        </div>
        
      </nav>
    );
}

export { Header };