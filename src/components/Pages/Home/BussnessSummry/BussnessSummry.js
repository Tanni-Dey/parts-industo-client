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
            <h1 className='text-primary font-sans text-3xl lg:text-5xl uppercase'>Why choose <span className='text-secondary'>us</span></h1>
            <div className="stats stats-vertical lg:stats-horizontal shadow-2xl my-10">

                <div className="stat">
                    <div className="stat-figure text-primary text-2xl">
                        <VscTools />
                    </div>
                    <div className="stat-title">Tools</div>
                    <div className="stat-value text-primary">50+</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary text-2xl">
                        <IoIosPeople />
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value text-secondary">100+</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary text-2xl">
                        <AiOutlineLineChart />
                    </div>
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value text-primary">120M+</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary text-2xl">
                        <BiCommentDetail />
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-secondary">33K+</div>
                </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 text-white'>
                <div className='p-5 lg:pl-16 bg-primary'>
                    <h4 className='text-left text-4xl font-sans'>Quality Resourcing</h4>
                    <h4 className='text-left text-4xl text-secondary font-sans mt-2'> & Analytics</h4>

                    <p className='my-5 text-left'>You can understand our quality by looking at the reviews, we try our best to make the customer happy. If there is any defect in our product, we repair it within one month. Customers can check our products in our factory before buying. We sell the product by checking the mechanical defect in front of the customer, which satisfies our customer.</p>

                    <p className='text-left flex items-center'><FiCheckCircle /><span className=' ml-3'>Improving Productivity</span></p>
                    <p className='text-left flex items-center'><FiCheckCircle /><span className=' ml-3'>Enhancing Customer Support</span></p>
                    <p className='text-left flex items-center'><FiCheckCircle /><span className=' ml-3'>Targeting Consumers </span></p>
                    <p className='text-left flex items-center'><FiCheckCircle /><span className=' ml-3'>Using predictive analytics</span></p>

                    <a className=' btn btn-link mt-5  text-secondary' href='/'>Read More <span className='ml-3'><AiOutlineArrowRight /></span></a>
                </div>
                <div className='p-5 lg:pr-16 bg-secondary'>
                    <h4 className='text-primary text-xl text-left font-sans'>Our Skills</h4>
                    <h2 className='text-3xl font-sans text-left  mb-10 mt-5'>Get a solution for all your needs.</h2>
                    <div className='mb-3'>
                        <p className='flex justify-between'><span>Production</span><span>80%</span></p>
                        <input type="range" min="0" max="100" value="80" className="range range-primary range-xs my-2" />
                    </div>
                    <div className='mb-3'>
                        <p className='flex justify-between'><span>International</span><span>70%</span></p>
                        <input type="range" min="0" max="100" value="70" className="range range-primary range-xs my-2" />
                    </div>
                    <div className='mb-3'>
                        <p className='flex justify-between'><span>Customer Satisfaction</span><span>90%</span></p>
                        <input type="range" min="0" max="100" value="90" className="range range-primary range-xs my-2" />
                    </div>
                    <div>
                        <p className='flex justify-between'><span>Utilization Rate</span><span>60%</span></p>
                        <input type="range" min="0" max="100" value="60" className="range range-primary range-xs my-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussnessSummry;