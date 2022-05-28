import React from 'react';

const Portfolio = () => {
    return (
        <>
            <div className='shadow-xl rounded-2xl p-5 font-serif mx-10 lg:mx-auto my-20 lg:w-1/2  lg:mx-20'>
                <h4 className='text-xl font-sans text-primary'>Tanni Rani Dey</h4>
                <p className='text-center text-gray-600 my-5'>tonnidey277615@gmail.com</p>
                <p className='text-secondary text-md font-sans mb-2'>Education: Diploma-in-engineering from Sylhet Polytechnic Institute</p>
                <p></p>
                <p className='font-serif'></p>
            </div>
            <div className='p-10 lg:p-20 bg-secondary'>
                <h4 className='text-primary mb-20 text-xl text-left font-sans'>My Skills</h4>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>HTML</span><span>80%</span></p>
                    <input type="range" min="0" max="100" value="80" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>CSS</span><span>70%</span></p>
                    <input type="range" min="0" max="100" value="70" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>Bootstrap</span><span>70%</span></p>
                    <input type="range" min="0" max="100" value="70" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>Tailwind Css</span><span>75%</span></p>
                    <input type="range" min="0" max="100" value="75" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>Daisy Ui</span><span>75%</span></p>
                    <input type="range" min="0" max="100" value="75" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>JAVASCRIPT</span><span>65%</span></p>
                    <input type="range" min="0" max="100" value="65" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>React Js</span><span>70%</span></p>
                    <input type="range" min="0" max="100" value="70" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>MongoDB</span><span>30%</span></p>
                    <input type="range" min="0" max="100" value="30" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>Node Js</span><span>30%</span></p>
                    <input type="range" min="0" max="100" value="30" className="range range-primary range-xs my-2" />
                </div>
                <div className='mb-3'>
                    <p className='flex justify-between'><span>Express Js</span><span>30%</span></p>
                    <input type="range" min="0" max="100" value="30" className="range range-primary range-xs my-2" />
                </div>
            </div>
            <div className='my-20'>
                <div className='grid grid-cols-1 gap-5 mx-10 lg:mx-20 lg:grid-cols-3'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/sJVL5kt/Screenshot-146.png" alt="book-closet" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Book Closet</h2>
                            <p className='text-left'>Warehouse Project</p>
                            <div className="card-actions justify-end">
                                <a target='_blank' href="https://book-closet.web.app//"><button className="btn btn-sm btn-primary">Live site</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/x191RRk/Screenshot-147.png" alt="book-closet" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Unique Photography</h2>
                            <p className='text-left'>Photography Porfolio Project</p>
                            <div className="card-actions justify-end">
                                <a target='_blank' href="https://unique-photograpy.web.app/"><button className="btn btn-sm btn-primary">Live site</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/GxhLr6j/Screenshot-148.png" alt="book-closet" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Furniture Reviews</h2>
                            <p className='text-left'>Product Review Project</p>
                            <div className="card-actions justify-end">
                                <a target='_blank' href="https://furniture-review.netlify.app/"><button className="btn btn-sm btn-primary">Live site</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;