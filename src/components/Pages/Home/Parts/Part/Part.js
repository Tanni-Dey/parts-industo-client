import React from 'react';
import { Link } from 'react-router-dom';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';

const Part = ({ part }) => {
    const { _id, name, des, price, img, minOrderQ, aviableQuantiy } = part;
    const [user] = useAuthState(auth)
    const [isLiked, setIsLiked] = useState(false)

    // const liked = () => {
    //     const like = {
    //         isLiked: true,
    //         email: user.email,
    //         toolId: _id
    //     }
    //     fetch(`http://localhost:5000/like?tool=${_id}`, {
    //         method: 'PUT',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(like)
    //     }).then(res => res.json())
    //         .then(data => console.log('f'))

    // }
    return (
        <div className='shadow-lg rounded-2xl p-5 font-serif'>
            <div className='flex justify-center w-full h-44'>
                <img src={img} alt="" />
            </div>
            <h4 className='text-xl font-sans text-primary'>{name}</h4>
            <p className='text-justify text-gray-600 my-5'><small>{des?.length > 200 ? des.slice(0, 150) : des}</small></p>
            <p className='text-secondary text-xl font-sans mb-2'>Price :{price}</p>
            <p>Minimum Order Quantity:{minOrderQ}</p>
            <p className=''>Available Quantity :{aviableQuantiy}</p>
            {user && <button onClick={() => setIsLiked(true)} className='text-2xl'>{
                // <FcLikePlaceholder />
                !isLiked ? <FcLikePlaceholder /> : <FcLike />
            }</button>}
            <Link to={`/purchase/${_id}`}><button className='btn btn-secondary w-full mt-5 text-primary hover:btn-primary'>Order Now</button></Link>
        </div>
    );
};

export default Part;