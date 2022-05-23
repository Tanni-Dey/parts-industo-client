import React from 'react';
import { VscTools } from 'react-icons/vsc';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineLineChart, AiOutlineArrowRight } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BussnessSummry = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-primary font-sans text-5xl uppercase'>Why choose <span className='text-secondary'>us</span></h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow-2xl my-10">

                <div class="stat">
                    <div class="stat-figure text-primary text-2xl">
                        <VscTools />
                    </div>
                    <div class="stat-title">Tools</div>
                    <div class="stat-value text-primary">50+</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary text-2xl">
                        <IoIosPeople />
                    </div>
                    <div class="stat-title">Customers</div>
                    <div class="stat-value text-secondary">100+</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary text-2xl">
                        <AiOutlineLineChart />
                    </div>
                    <div class="stat-title">Annual revenue</div>
                    <div class="stat-value text-primary">120M+</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-secondary text-2xl">
                        <BiCommentDetail />
                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value text-secondary">33K+</div>
                </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 text-white'>
                <div className='p-5 bg-primary'>
                    <h4 className='text-left text-4xl font-sans'>Quality Resourcing</h4>
                    <h4 className='text-left text-4xl text-secondary font-sans mt-2'> & Analytics</h4>

                    <p className='my-5 text-left'>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>

                    <p className='text-left flex items-center'><FiCheckCircle /><span className=' ml-3'>Improving Productivity</span></p>
                    <p className='text-left flex items-center'><FiCheckCircle /><span className=' ml-3'>Enhancing Customer Support</span></p>
                    <p className='text-left flex items-center'><FiCheckCircle /><span className=' ml-3'>Targeting Consumers </span></p>
                    <p className='text-left flex items-center'><FiCheckCircle /><span className=' ml-3'>Using predictive analytics</span></p>

                    <a className=' btn btn-link mt-5  text-secondary' href='/'>Read More <span className='ml-3'><AiOutlineArrowRight /></span></a>
                </div>
                <div className='p-5 bg-secondary'>
                    <h4 className='text-primary text-xl text-left font-sans'>Our Skills</h4>
                    <h2 className='text-3xl font-sans text-left  mb-10 mt-5'>Get a solution for all your needs.</h2>
                    <div className='mb-3'>
                        <p className='flex justify-between'><span>Production</span><span>80%</span></p>
                        <input type="range" min="0" max="100" value="80" class="range range-primary range-xs my-2" />
                    </div>
                    <div className='mb-3'>
                        <p className='flex justify-between'><span>International</span><span>70%</span></p>
                        <input type="range" min="0" max="100" value="70" class="range range-primary range-xs my-2" />
                    </div>
                    <div className='mb-3'>
                        <p className='flex justify-between'><span>Customer Satisfaction</span><span>90%</span></p>
                        <input type="range" min="0" max="100" value="90" class="range range-primary range-xs my-2" />
                    </div>
                    <div>
                        <p className='flex justify-between'><span>Utilization Rate</span><span>60%</span></p>
                        <input type="range" min="0" max="100" value="60" class="range range-primary range-xs my-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussnessSummry;