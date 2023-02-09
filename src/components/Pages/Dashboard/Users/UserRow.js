import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { _id, email, role } = user;

    const makeAdmin = () => {
        fetch(`https://parts-industo.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                return toast.error('You are not an admin')
            }
            return res.json()
        }).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success('made an admin')
            }
            console.log(data)
        })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{_id}</td>
            <td>{email}</td>
            <td>{!role ? <button onClick={makeAdmin} className='btn btn-success btn-sm'>make admin</button> : <span className='text-green-400'>Already Admin</span>}</td>
        </tr>
    );
};

export default UserRow;