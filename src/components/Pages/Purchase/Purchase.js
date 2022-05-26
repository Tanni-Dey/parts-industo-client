import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: order, isLoading } = useQuery('order', () => fetch(`http://localhost:5000/tool/${id}`).then(res => res.json()))


    const onSubmit = async (data, e) => {
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(newOrder => console.log(newOrder))
        toast.success('Order Submitted')
        console.log(data);
        e.target.reset()
    }
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 py-20 lg:px-20'>
            <div className='shadow-lg rounded-2xl p-10 font-serif '>
                <div className='flex justify-center w-full'>
                    <img src={order?.img} alt="" />
                </div>
                <div>
                    <h4 className='text-xl font-sans text-primary'>{order?.name}</h4>
                    <p className='text-justify text-gray-600 my-5'><small>{order?.des}</small></p>
                    <p className='text-secondary text-xl font-sans mb-2'>Price :{order?.price}</p>
                    <p>Minimum Order Quantity:{order?.minOrderQ}</p>
                    <p>Available Quantity :{order?.aviableQuantiy}</p>
                </div>
            </div>
            <div>
                <h2 className='text-primary font-sans text-3xl'>Place <span className='text-secondary'>Order</span></h2>
                <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                    <label className='label max-w-xs w-full  mx-auto'>
                        <span class="label-text">Your Name :</span>
                    </label>

                    <input type="text" readOnly value={user?.displayName} class="input input-bordered input-md w-full max-w-xs mb-2" {...register("userName")} />

                    <label className='label max-w-xs w-full  mx-auto'>
                        <span class="label-text">Your Email :</span>
                    </label>
                    <input type="email" readOnly value={user?.email} class="input input-bordered input-md w-full max-w-xs mb-2" {...register("email")} />


                    <label className='label max-w-xs w-full  mx-auto'>
                        <span class="label-text">Tool Name :</span>
                    </label>
                    <input type="text" readOnly value={order?.name} class="input input-bordered input-md w-full max-w-xs mb-2" {...register("toolName")} />


                    <label className='label max-w-xs w-full  mx-auto'>
                        <span class="label-text">Tool Price :</span>
                    </label>
                    <input type="number" readOnly value={order?.price} class="input input-bordered input-md w-full max-w-xs mb-2" {...register("price")} />

                    <label className='label max-w-xs w-full  mx-auto'>
                        <span class="label-text">Order Quantity :</span>
                    </label>
                    <input type="number" placeholder='Your order quantity' defaultValue={order?.minOrderQ} class="input input-bordered input-md w-full max-w-xs mb-2" {...register("orderQuantity", {
                        required: {
                            value: true,
                            message: "Please give your order Quantity"
                        },
                        min: {
                            value: order?.minOrderQ,
                            message: `Minimum Order Quantity ${order?.minOrderQ}`
                        },
                        max: {
                            value: order?.aviableQuantiy,
                            message: "Not enough Stock"
                        }
                    })} />
                    <label className='label max-w-xs w-full  mx-auto'>
                        {errors.orderQuantity?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.orderQuantity?.message}</span>}
                        {errors.orderQuantity?.type === 'min' && <span className='label-text-alt  text-red-600'>{errors?.orderQuantity?.message}</span>}
                        {errors.orderQuantity?.type === 'max' && <span className='label-text-alt  text-red-600'>{errors?.orderQuantity?.message}</span>}
                    </label>



                    <label className='label max-w-xs w-full  mx-auto'>
                        <span class="label-text">Your Address :</span>
                    </label>
                    <input type="text" placeholder='Your Address' class="input input-bordered input-md w-full max-w-xs mb-2" {...register("address", {
                        required: {
                            value: true,
                            message: "Give your Address for confirm order"
                        }
                    })} />
                    <label className='label max-w-xs w-full  mx-auto'>
                        {errors.address?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.address?.message}</span>}
                    </label>



                    <label className='label max-w-xs w-full  mx-auto'>
                        <span class="label-text">Your Phone Number :</span>
                    </label>
                    <input type="number" placeholder='Your Phone Number' class="input input-bordered input-md w-full max-w-xs mb-2" {...register("phone", {
                        required: {
                            value: true,
                            message: "Give your Phone number for confirm order"
                        }
                    })} />
                    <label className='label max-w-xs w-full  mx-auto'>
                        {errors.phone?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.phone?.message}</span>}
                    </label>


                    <input type="submit" disabled={errors.minOrderQ || errors.phone || errors.address || errors.orderQuantity} className='btn btn-primary w-full max-w-xs' value='Confirm Order' />
                </form>
            </div>
        </div>
    );
};

export default Purchase;