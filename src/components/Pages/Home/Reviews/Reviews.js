import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        fetch('https://evening-eyrie-81850.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])

    return (
        <div className='mb-20 px-10 lg:px-20'>
            <h2 className='uppercase text-primary text-3xl md:text-5xl font-sans'>Our <span className='text-secondary'>Reviews</span></h2>
            <div className='grid grid-cols-1 mt-10 lg:grid-cols-4 gap-5'>
                {
                    allReviews.map(singleReview => <div key={singleReview._id} className='flex items-center p-5 shadow-xl rounded-xl'>
                        <div className="avatar mr-5">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='' src={singleReview.image} />
                            </div>
                        </div>
                        <div>
                            <h6 className='text-md font-sans capitalize text-primary '>{singleReview.userName}</h6>
                            <p>{singleReview.review}</p>
                            <div className="rating rating-xs">
                                <span className='mr-2'>rating: {singleReview.rating}</span>
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Reviews;