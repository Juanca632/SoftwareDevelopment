import React, { useRef } from 'react';
import { LoginSignupHome } from '../../containers/LoginSignupHome/LoginSignupHome';
import axios from 'axios';
import "./Signup.css";

const API = "http://localhost:8000/signup";

const Signup = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form.current);
      const data = {
        user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password")
      }
      if(formData.get("name") == "" || formData.get("email") == "" || formData.get("password") == ""){
        alert("Complete all the fields");
      }else{
        axios.post(API, data)
        .then( response =>{
          console.log(response);
        })
        alert("New User Created");
        window.location.href="./login";
      }
      
    }


    return (
      <LoginSignupHome>
        <div className="CreateAccount">
          <div className="CreateAccount-container">
            <h1 className="title">My account</h1>
            <form action="/" className="form" ref={form}>
              <div>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Teff"
                  className="input input-name"
                />
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="example@example.com"
                  className="input input-email"
                />
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="*********"
                  className="input input-password"
                />
              </div>
              <input
                type="submit"
                value="Create"
                className="primary-button login-button"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </LoginSignupHome>
    );
}

export { Signup };