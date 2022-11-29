import React, {useRef}  from 'react';
import "./Login.css";
import { LoginSignupHome } from '../../containers/LoginSignupHome/LoginSignupHome';
import { useGetProducts } from '../../hooks/useGetProducts';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import Swal from "sweetalert2";
import md5 from 'md5';

const API = "http://localhost:8000/users";
const cookies = new Cookies();

let users;

const Login = () => {

    const form = useRef(null);

    users = useGetProducts(API);

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form.current);
      const data = {
        email: formData.get("email"),
        password: md5(formData.get("password"))
      }
      const userData = users.find(user => (user.email === data.email) && (user.password === data.password));
      if(userData == undefined){
        
        Swal.fire({
          title: "There was an error",
          text: "Email or password are incorrect, try again",
          icon: "error",
          confirmButtonColor: "#343a40"
        })
      }
      else{
        cookies.set("id", userData.user_id, {path: "/"});
        cookies.set("name", userData.name, {path: "/"});
        cookies.set("email", userData.email, {path: "/"});
        Swal.fire({
          title: `Welcome ${userData.name}`,
          text: "You have succesfully logged in",
          icon: "success",
          confirmButtonColor: "#343a40"
        }).then(response => {
          if(response.isConfirmed){

            window.location.href="/";
          }
        })
      }
    }

    
    
    return (
        <LoginSignupHome>
          <div className="Login">
            <div className="Login-container">
              <img  alt="logo" className="logo" />
              <form action="/" className="form" ref={form}>
                <label htmlFor="email" className="label">
                  Email address
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
                <button
                  className="primary-button login-button"
                  onClick={handleSubmit}>
                  Log in
                </button>
                <Link to="/signup" className='forgot'>Forgot my password</Link>
              </form>
              <Link to="/signup" className="secondary-button signup-button">
                Sign up
              </Link>
            </div>
          </div>
          </LoginSignupHome>
      
    );
}

export { Login, users };