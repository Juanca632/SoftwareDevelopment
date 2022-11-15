import React from 'react';
import "./Banner.css";
import img1 from "../../assets/img/carousel-1.jpg";
import img2 from "../../assets/img/carousel-2.jpg";

const Banner = () => {
    return (   
        <div className='Banner'>
          <div className='slider'>
            <ul>
              <li><img src={img1}/></li>
              <li><img src={img2}/></li>
            </ul>
          </div>
          <div className='Banner-Slider'>
            <div className='banner-info'>
              <h1>HIGH QUALITY</h1>
              <a href='#main-container' className='banner-button'>Check Now</a>
            </div>
          </div>
        </div> 

    );
}

export { Banner };