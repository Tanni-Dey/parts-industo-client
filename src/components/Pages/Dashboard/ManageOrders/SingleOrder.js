import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { toast } from 'react-toastify';

const SingleOrder = ({ order, refetch }) => {


    const handleDelete = id => {
        if (!order.paid) {
            fetch(`http://localhost:5000/order/${id}`, {
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
            toast.error('this is paid order')
        }
    }

    return (

        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal sm:modal-middle">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">Are you want cancel this order ?</h3>
                    <p class="py-4">Select Yes or No</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-sm btn-error">No</label>
                        <label onClick={() => handleDelete(order._id)} for="my-modal-6" class="btn btn-sm btn-success">Yes</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleOrder;