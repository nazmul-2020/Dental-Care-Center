import React from 'react';
import banner from '../../../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <h2 className='text-center'>Welcome to <span className='text-primary'>Dental Care Center</span></h2>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;