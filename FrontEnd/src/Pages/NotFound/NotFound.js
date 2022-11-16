import React from 'react';
import "./NotFound.css"


const NotFound = () => {
    return (
        <div className='NotFound'>
            <div className='Error'>
                <h1>404 ERROR</h1>
                <p>NOT FOUND</p>
            </div>
        </div>
    );
}

export { NotFound };