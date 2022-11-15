import React from 'react';
import "./Vendor.css";
import vendor1 from "../../assets/img/vendor-1.png"
import vendor2 from "../../assets/img/vendor-2.png"
import vendor3 from "../../assets/img/vendor-3.png"
import vendor4 from "../../assets/img/vendor-4.png"
import vendor5 from "../../assets/img/vendor-5.png"
import vendor6 from "../../assets/img/vendor-6.png"
import vendor7 from "../../assets/img/vendor-7.png"
import vendor8 from "../../assets/img/vendor-8.png"

const Vendor = () => {
    return (
        <div className="Vendor">
            <div className='brands-list'>
                <div>
                    <img src={vendor1}/>
                </div>
                <div>
                    <img src={vendor1}/>
                </div>
                <div>
                    <img src={vendor1}/>
                </div>
                <div>
                    <img src={vendor1}/>
                </div>
                <div>
                    <img src={vendor1}/>
                </div>
                <div>
                    <img src={vendor1}/>
                </div>
                <div>
                    <img src={vendor1}/>
                </div>
                <div>
                    <img src={vendor1}/>
                </div>

            </div>
        </div>
    );
}

export { Vendor };