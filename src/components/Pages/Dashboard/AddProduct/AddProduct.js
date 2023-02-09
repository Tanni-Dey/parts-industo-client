import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageApikey = 'ee255718b07a16e002143e0f0594e3c5';


    const onSubmit = async (data, e) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageApikey}`, {
            method: 'POST',
            body: formData,

        }).then(res => res.json()).then(newImg => {
            if (newImg.success) {
                const image = newImg.data.url;
                const product = {
                    name: data.name,
                    des: data.des,
                    price: data.price,
                    img: image,
                    minOrderQ: data.minOrderQ,
                    aviableQuantiy: data.aviableQuantiy
                }
                fetch('https://parts-industo.onrender.com/addtool', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                }).then(res => res.json()).then(newTool => {
                    if (newTool.insertedId) {
                        toast.success('New Product Added')
                    }
                    console.log(newTool)
                })
            }
        })



        console.log(data);
        e.target.reset()
    }
    return (
        <div>
            <h2 className='text-primary font-sans text-2xl'>Add <span className='text-secondary'>Product</span></h2>
            <form className='my-5' onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder='Product Name' className="input input-bordered input-md w-full max-w-xs mb-2" {...register("name", {
                    required: {
                        value: true,
                        message: "Please give Product Name"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.name?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.name?.message}</span>}
                </label>

                <textarea type="text" placeholder='Product Description' className="input input-bordered input-md w-full max-w-xs mb-2 textarea" {...register("des", {
                    required: {
                        value: true,
                        message: "Please give Product Description"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.des?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.des?.message}</span>}
                </label>


                <input type="number" placeholder='Minimum Order Quantity' className="input input-bordered input-md w-full max-w-xs mb-2" {...register("minOrderQ", {
                    required: {
                        value: true,
                        message: "Please give Minimum Order Quantity"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.minOrderQ?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.minOrderQ?.message}</span>}
                </label>


                <input type="number" placeholder='Available Quantity' className="input input-bordered input-md w-full max-w-xs mb-2" {...register("aviableQuantiy", {
                    required: {
                        value: true,
                        message: "Please give Available Product Quantity"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.aviableQuantiy?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.aviableQuantiy?.message}</span>}
                </label>

                <input type="number" placeholder='Product Price' className="input input-bordered input-md w-full max-w-xs mb-2" {...register("price", {
                    required: {
                        value: true,
                        message: "Please give Product Price"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.price?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.price?.message}</span>}
                </label>



                <input type="file" className="input input-bordered input-md w-full max-w-xs mb-2" {...register("img", {
                    required: {
                        value: true,
                        message: "Please Choose an Product Image"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.img?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors?.img?.message}</span>}
                </label>


                <input type="submit" className='btn btn-primary w-full max-w-xs' value='Add product' />
            </form>
        </div>
    );
};

export default AddProduct;