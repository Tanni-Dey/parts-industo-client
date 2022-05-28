import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { RiDeleteBin6Line } from 'react-icons/ri'
import Loading from '../../../Shared/Loading/Loading';
import SingleOrder from './SingleOrder';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('users', () => fetch('https://evening-eyrie-81850.herokuapp.com/order', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    const handleShipped = (id) => {
        fetch(`https://evening-eyrie-81850.herokuapp.com/order/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(status => {
            console.log(status)
            refetch()
        })
    }


    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr
                            key={order._id}
                        >
                            <td>{index + 1}</td>
                            <td>{order.userName}</td>
                            <td>{order.email}</td>
                            <td>{!order.paid ? 'Unpaid' : 'Paid'}</td>
                            <td> {order.status ? <span onClick={() => handleShipped(order._id)} className='btn btn-xs btn-outline text-secondary hover:text-white hover:outline-secondary'>{order.status}</span> : <span className='text-red-600 text-xs font-bold'>No Status</span>}</td>



                            <td><label for="my-modal-6" on disabled={order.status} className='btn modal-button bg-red-600 border-0 btn-sm rounded-full text-white text-xl'><RiDeleteBin6Line /></label></td>

                            <td>
                                <SingleOrder refetch={refetch} order={order._id} />
                            </td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;