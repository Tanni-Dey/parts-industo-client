import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, des, price, img, minOrderQ, aviableQuantiy } = part;

    const handlePurchase = () => {
        // const param=useParams()

    }

    return (
        <div className='shadow-lg rounded-2xl p-5 font-serif'>
            <div className='flex justify-center w-full'>
                <img src={img} alt="" />
            </div>
            <h4 className='text-xl font-sans text-primary'>{name}</h4>
            <p className='text-justify text-gray-600 my-5'><small>{des.length > 200 ? des.slice(0, 200) : des}</small></p>
            <p className='text-secondary text-xl font-sans mb-2'>Price :{price}</p>
            <p>Minimum Order Quantity:{minOrderQ}</p>
            <p className=''>Available Quantity :{aviableQuantiy}</p>
            <Link to={`/purchase/${_id}`}><button className='btn btn-secondary w-full mt-5 text-primary hover:btn-primary'>Order Now</button></Link>
        </div>
    );
};

export default Part;