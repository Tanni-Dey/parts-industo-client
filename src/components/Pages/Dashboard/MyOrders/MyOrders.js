import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myorders, setMyorders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [user.email])
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Tool Name</th>
                        <th>Tool Price</th>
                        <th>Quantity</th>
                        <th></th>
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
                            <Link to='' className='btn btn-secondary btn-sm'>Payment</Link>
                            <Link to='' className='btn btn-secondary btn-sm'>cancel</Link>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;