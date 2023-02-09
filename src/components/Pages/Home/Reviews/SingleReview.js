import React from 'react';

const SingleReview = ({ singleReview }) => {
    const rate = Number(singleReview.rating);


    let stars = [];
    for (let i = 1; i <= rate; i++) {
        stars.push(i)
    }

    return (
        <div className='bg-gray-900 p-5 shadow-xl rounded-xl text-left'>
            <div key={singleReview._id} className='flex  items-center '>
                <div className="avatar mr-5">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img alt='' src={singleReview.image} />
                    </div>
                </div>
                <div className='text-left text-white'>
                    <div className="rating rating-xs">
                        {
                            stars.map((star, index) => <input key={index} type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />)
                        }
                    </div>
                    <h6 className='text-md font-sans capitalize'>{singleReview.userName}</h6>
                </div>
            </div>

            <p className='mt-5 text-gray-100'>{singleReview.review}</p>
        </div>

    );
};

export default SingleReview;