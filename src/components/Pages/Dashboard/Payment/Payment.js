import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import Checkout from '../Checkout/Checkout';

const stripePromise = loadStripe('pk_test_51L3x8rDiYiTfEltlPemdr6ZZMSpViMGTqGqNiZHntekWzFiOS2oOS9LY5I0moVp5wCMrNsakNh5rKGoMWJGzsscy00XQXRkQ6y')

const Payment = () => {
    const { id } = useParams();
    const { data: orderdata, isLoading } = useQuery(['payment', id], () => fetch(`http://localhost:5000/payment/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="card w-96 mx-10 mt-20  bg-primary text-white text-left">
                <div class="card-body">
                    <h2 class="text-secondary text-xl font-sans">Hi, {orderdata.userName}</h2>
                    <h2 class="card-title">Pay for {orderdata.toolName}</h2>
                    <p>Your Order Quantity {orderdata.orderQuantity}</p>
                    <p>Please Pay ${Number(orderdata.price) * Number(orderdata.orderQuantity)}</p>
                    <Elements stripe={stripePromise}>
                        <Checkout orderdata={orderdata} />
                    </Elements>{/* 
                    <div className='card w-full'>
                        <div className='card-body'>

                        </div>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-sm btn-secondary text-white">Pay Now</button>
                    </div>
 */}
                </div>
            </div>

        </div>
    );
};

export default Payment;