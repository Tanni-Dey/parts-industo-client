import React from 'react';
import { useQuery } from 'react-query';
import { RiDeleteBin6Line } from 'react-icons/ri'
import Loading from '../../../Shared/Loading/Loading';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/tool').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/tool/${id}`, {
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
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
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

                            <td><label for="my-modal-6" className='btn modal-button bg-red-600 border-0 btn-sm rounded-full text-white text-xl'><RiDeleteBin6Line /></label></td>

                            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                            <div class="modal sm:modal-middle">
                                <div class="modal-box">
                                    <h3 class="font-bold text-lg">Are you want delete this product ?</h3>
                                    <p class="py-4">Select Yes or No</p>
                                    <div class="modal-action">
                                        <label for="my-modal-6" class="btn btn-sm btn-error">No</label>
                                        <label onClick={() => handleDelete(product._id)} for="my-modal-6" class="btn btn-sm btn-success">Yes</label>
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