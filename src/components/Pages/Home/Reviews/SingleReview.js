import React from 'react';

const SingleReview = ({ singleReview }) => {
    const rate = Number(singleReview.rating);


    let stars = [];
    for (let i = 1; i <= rate; i++) {
        stars.push(i)
    }

    return (
        <div key={singleReview._id} className='flex items-center p-5 shadow-xl rounded-xl'>
            <div className="avatar mr-5">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt='' src={singleReview.image} />
                </div>
            </div>
            <div>
                <h6 className='text-md font-sans capitalize text-primary '>{singleReview.userName}</h6>
                <p>{singleReview.review}</p>
                <div className="rating rating-xs">
                    {
                        stars.map((star, index) => <input key={index} type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleReview;