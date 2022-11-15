import React, {useRef}  from 'react';
import "./Login.css";
import { LoginSignupHome } from '../../containers/LoginSignupHome/LoginSignupHome';

const Login = () => {

    const form = useRef(null);

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
                  
                >
                  Log in
                </button>
                <a href="/" className='forgot'>Forgot my password</a>
              </form>
              <button className="secondary-button signup-button">
                Sign up
              </button>
            </div>
          </div>
          </LoginSignupHome>
      
    );
}

export { Login };