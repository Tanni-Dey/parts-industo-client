import React from 'react';
import { ImLinkedin2, ImFacebook, ImTwitter } from 'react-icons/im'
import { GrGooglePlus } from 'react-icons/gr'

const Experts = () => {
    return (
        <div className='mx-10 my-20 lg:mx-20'>
            <h2 className='uppercase text-primary text-3xl md:text-5xl font-sans'>Our <span className='text-secondary'>Experts</span></h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/dp0qTm8/Team-3.jpg" alt="img" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-xl text-primary font-sans">
                            Jason Smith
                        </h2>
                        <p className='text-left font-sans text-secondary'>Mechanical Engineer</p>
                        <div class="card-actions justify-end text-primary">
                            <div class="badge badge-outline"><ImFacebook /></div>
                            <div class="badge badge-outline"><ImLinkedin2 /></div>
                            <div class="badge badge-outline"><GrGooglePlus /></div>
                            <div class="badge badge-outline"><ImTwitter /></div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/sVD7XFC/Team-2.jpg" alt="img" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-xl text-primary font-sans">
                            Linda Johns
                        </h2>
                        <p className='text-left font-sans text-secondary'>Money Management</p>
                        <div class="card-actions justify-end text-primary">
                            <div class="badge badge-outline"><ImFacebook /></div>
                            <div class="badge badge-outline"><ImLinkedin2 /></div>
                            <div class="badge badge-outline"><GrGooglePlus /></div>
                            <div class="badge badge-outline"><ImTwitter /></div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/y06QWFy/Team-1.jpg" alt="img" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-xl text-primary font-sans">
                            Herb Dorothy
                        </h2>
                        <p className='text-left font-sans text-secondary'>Production Head</p>
                        <div class="card-actions justify-end text-primary">
                            <div class="badge badge-outline"><ImFacebook /></div>
                            <div class="badge badge-outline"><ImLinkedin2 /></div>
                            <div class="badge badge-outline"><GrGooglePlus /></div>
                            <div class="badge badge-outline"><ImTwitter /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;