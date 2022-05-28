import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const Checkout = ({ orderdata }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { _id, userName, orderQuantity, email, price } = orderdata;
    const totalPrice = Number(price) * Number(orderQuantity)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://evening-eyrie-81850.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
            setSuccess('')
        }
        else {
            console.log(paymentIntent);
            setTransactionId(paymentIntent?.id)
            setCardError('')
            setSuccess('Your Payment is Completed')

            const payment = {
                order: _id,
                transactionid: paymentIntent?.id
            }

            fetch(`https://evening-eyrie-81850.herokuapp.com/payment/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json()).then(data => {
                setProcessing(false)
            })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className='shadow-xl w-full py-5 bg-base-100 rounded-xl px-2'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-5 btn btn-sm btn-secondary text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-error'>{cardError}</p>
            }
            {
                success && <>
                    <p className='text-success'>{success}</p>
                    <p className='text-success'>Your TransactionID : {transactionId}</p>
                </>
            }
        </>
    );
};

export default Checkout;