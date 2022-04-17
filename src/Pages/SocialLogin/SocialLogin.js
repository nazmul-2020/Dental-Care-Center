import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-100 bg-primary'></div>
                <p className='pt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-100 bg-primary'></div>
            </div>
            <div>
            <div className=''>
                <button className='btn btn-whit w-75 text-white mx-auto d-block my-3 bg-primary'>
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button  className='btn btn-whit w-75 mx-auto text-white d-block my-3 bg-primary'>
                    <span className='px-2'>GitHub Sign In</span>
                </button>
            </div>
            </div>
        </div>
    );
};

export default SocialLogin;