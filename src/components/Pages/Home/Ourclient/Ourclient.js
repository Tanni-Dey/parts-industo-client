import React from 'react';

const Ourclient = () => {
    return (
        <div className=' bg-gray-200'>
            <div className='mx-10 mt-20 py-20 lg:mx-20'>
                <h2 className='uppercase text-primary text-3xl md:text-5xl font-sans'>Our Clients <span className='text-secondary'>Around the World</span></h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                    <img className='my-5 p-5 hover:border-secondary border border-transparent' src="https://i.ibb.co/6Fdqs2N/logo-8.png" alt="" />
                    <img className='my-5 p-5 hover:border-secondary border border-transparent' src="https://i.ibb.co/xMbKG5Q/logo-7.png" alt="" />
                    <img className='my-5 p-5 hover:border-secondary border border-transparent' src="https://i.ibb.co/0XKJH2g/logo-6.png" alt="" />
                    <img className='my-5 p-5 hover:border-secondary border border-transparent' src="https://i.ibb.co/VpWjsRC/logo-5.png" alt="" />
                    <img className='my-5 p-5 hover:border-secondary border border-transparent' src="https://i.ibb.co/tZXbwk4/logo-4.png" alt="" />
                    <img className='my-5 p-5 hover:border-secondary border border-transparent' src="https://i.ibb.co/DVjPwFB/logo-3.png" alt="" />
                    <img className='my-5 p-5 hover:border-secondary border border-transparent' src="https://i.ibb.co/G902vFS/logo-2.png" alt="" />
                    <img className='my-5 p-5 hover:border-secondary border border-transparent' src="https://i.ibb.co/3RZFcMy/logo-1-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Ourclient;