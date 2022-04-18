import React from 'react';
import about from '../../images/pavel-removebg-preview.png'

const About = () => {
    return (
        <div className='container mt-3'>
            <h3 className='text-center '>ABOUT ME</h3>
            <div className=' row g-5 my-5  border border-success  shadow rounded'>
                <div className=' col-lg-6 col-md-12 d-flex d-flex align-items-center text-justify '>
                    <div>
                    <h3 className='text-center text-primary pt-3'>My Goal</h3>
                    <p> Hi! This is  Nazmul Hasan. Now! am really hardworking to become a
                        successful Web Developer. After 6 months I want to make
                        myself a professional Web Developer. For this reason, I am working 6-8 hours a day after mine.</p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 px-5 mx-auto d-block'>
                    <img className='w-75 ' src={about} alt="" />

                </div>

            </div>
        </div>
    );
};

export default About;