import React from 'react';
import banner from '../../../../images/baner (2).jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <h2>Welcome to <span className='text-primary'>DentalCare Service</span></h2>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;