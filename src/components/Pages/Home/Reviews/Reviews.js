import React from 'react';

const Reviews = () => {
    return (
        <div className='mb-20 px-10 lg:px-20'>
            <h2 className='uppercase text-primary text-5xl font-sans'>Our <span className='text-secondary'>Reviews</span></h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='flex items-center p-5 shadow-xl rounded-xl'>
                    <div class="avatar mr-5">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='' src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <div>
                        <p>I am really pleased </p>
                        <div class="rating rating-xs">
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;