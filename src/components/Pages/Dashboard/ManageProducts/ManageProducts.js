import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { RiDeleteBin6Line } from 'react-icons/ri'
import Loading from '../../../Shared/Loading/Loading';

const ManageProducts = () => {
    const [productId, setProductId] = useState('')
    const { data: products, isLoading, refetch } = useQuery('users', () => fetch('https://parts-industo.onrender.com/tool').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        fetch(`https://parts-industo.onrender.com/tool/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            refetch()
        })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>product name</th>
                        <th>price</th>
                        <th>minimum Order</th>
                        <th>aviable Quantiy</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr
                            key={product._id}
                        >
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.minOrderQ}</td>
                            <td> {product.aviableQuantiy}</td>

                            <td><label for="my-modal-6" onClick={() => setProductId(product._id)} className='btn modal-button bg-red-600 border-0 btn-sm rounded-full text-white text-xl'><RiDeleteBin6Line /></label></td>

                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Are you want delete this product ?</h3>
                                    <p className="py-4">Select Yes or No</p>
                                    <div className="modal-action">
                                        <label for="my-modal-6" className="btn btn-sm btn-error">No</label>
                                        <label onClick={() => handleDelete(productId)} for="my-modal-6" className="btn btn-sm btn-success">Yes</label>
                                    </div>
                                </div>
                            </div>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;