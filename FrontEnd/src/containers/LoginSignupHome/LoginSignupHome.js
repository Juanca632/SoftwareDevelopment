import React from 'react';
import "./LoginSignupHome.css"

const LoginSignupHome = ({children}) => {
    return (
        <div className="div-login">
            <div className="div-login-img">

            </div>
            <div className="div-login-form">
                {children}
            </div>
        </div>
    );
}

export { LoginSignupHome };