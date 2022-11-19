import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='Footer'>
            <h6>© <span className='span-footer'>Auto Shop.</span> All Rights Reserved.</h6>
            <p className='p-footer'>Designed by <span className='span-footer'>Juan Restrepo</span></p>
        </div>

    );
}

export { Footer };