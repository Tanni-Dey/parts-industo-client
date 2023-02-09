import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [orderId, setOrderId] = useState('')


    const { data: myorders, isLoading, refetch } = useQuery(['myorders', user.email], () => fetch(`https://parts-industo.onrender.com/myorder?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            navigate('/login')
            localStorage.removeItem('accessToken')
            signOut(auth)
        }
        return res.json()
    }))

    if (isLoading) {
        return <Loading />
    }



    const handleDelete = (id) => {
        const currentOrder = myorders.find(order => order._id === id)
        if (!currentOrder.paid) {
            fetch(`https://parts-industo.onrender.com/order/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json()).then(data => {

                console.log(data)
                refetch()
            })
        }
        else {
            toast.error('This is paid order')
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Tool Name</th>
                        <th>Tool Price</th>
                        <th>Quantity</th>
                        <th>Payment</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myorders.map((order, index) => <tr
                            key={order._id}
                        >
                            <th>{index + 1}</th>
                            <td>{order.userName}</td>
                            <td>{order.toolName}</td>
                            <td>{order.price}</td>
                            <td>{order.orderQuantity}</td>
                            {
                                !order.paid ? <td><Link to={`/dashboard/payment/${order._id}`} className='btn btn-secondary btn-sm'>Pay</Link></td> : <td className='text-green-500 p-5 font-bold'>Paid <p className='font-serif text-xs text-yellow-500'>Transaction id<p>{order.transId}</p></p></td>
                            }

                            {order.status ? <td className='text-warning capitalize'>{order.status}</td> : <td><label for="my-modal-6" onClick={() => setOrderId(order._id)} className='btn modal-button btn-secondary btn-sm'>cancel</label>

                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                <div className="modal sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Are you want cancle this order ?</h3>
                                        <p className="py-4">Select Yes or No</p>
                                        <div className="modal-action">
                                            <label for="my-modal-6" className="btn btn-sm btn-error">No</label>
                                            <label onClick={() => handleDelete(orderId)} for="my-modal-6" className="btn btn-sm btn-success">Yes</label>
                                        </div>
                                    </div>
                                </div></td>}
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;