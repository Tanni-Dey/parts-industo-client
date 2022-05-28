import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='p-5 lg:pl-16 bg-gray-100 text-primary uppercase'>
                <p className='my-5 text-left text-secondary'>Welcome to Parts Industo</p>

                <h4 className='text-left text-7xl font-sans'>Best Industry</h4>
                <h4 className='text-left text-7xl text-secondary font-sans mt-2'> For You</h4>
                <p className='my-5 text-left text-gray-400'>Parts Industo role is preparing and empowering</p>

                <div className='text-left'>
                    <button className='btn btn-primary btn-md'>Read More</button>
                </div>

            </div>
            <div class="carousel w-full h-96">
                <div id="slide1" class="carousel-item relative w-full">
                    <img alt='' src="https://static8.depositphotos.com/1225664/995/i/950/depositphotos_9955164-stock-photo-printed-circuit-board-of-electronics.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZ8DgZIlqcrAiZbmX2iwdswTgJ9u3Eqpcgw&usqp=CAU" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3WtC3k1YOcwok4WqRmlywwdQ4rAFudVMCw&usqp=CAU" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;