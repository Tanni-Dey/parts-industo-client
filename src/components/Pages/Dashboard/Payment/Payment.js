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
    const { data: orderdata, isLoading } = useQuery(['payment', id], () => fetch(`https://parts-industo.onrender.com/payment/${id}`, {
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
            <div className="card w-96 mx-10 mt-20  bg-primary text-white text-left">
                <div className="card-body">
                    <h2 className="text-secondary text-xl font-sans">Hi, {orderdata.userName}</h2>
                    <h2 className="card-title">Pay for {orderdata.toolName}</h2>
                    <p>Your Order Quantity {orderdata.orderQuantity}</p>
                    <p>Please Pay ${Number(orderdata.price) * Number(orderdata.orderQuantity)}</p>
                    <Elements stripe={stripePromise}>
                        <Checkout orderdata={orderdata} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;