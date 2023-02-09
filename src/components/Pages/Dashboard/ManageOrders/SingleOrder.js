import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { toast } from 'react-toastify';

const SingleOrder = ({ order, refetch }) => {


    const handleDelete = id => {
        if (!order.paid) {
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
            toast.error('this is paid order')
        }
    }

    return (

        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal sm:modal-middle">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Are you want cancel this order ?</h3>
                    <p className="py-4">Select Yes or No</p>
                    <div className="modal-action">
                        <label for="my-modal-6" className="btn btn-sm btn-error">No</label>
                        <label onClick={() => handleDelete(order)} for="my-modal-6" className="btn btn-sm btn-success">Yes</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleOrder;