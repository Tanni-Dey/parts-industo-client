import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageApikey = 'ee255718b07a16e002143e0f0594e3c5';

    const onSubmit = (data, e) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageApikey}`, {
            method: 'POST',
            body: formData,

        }).then(res => res.json()).then(uploadImg => {
            if (uploadImg.success) {
                const img = uploadImg.data.url;
                const review = {
                    userName: data.userName,
                    email: data.email,
                    image: img,
                    review: data.review,
                    rating: data.rating
                }
                //create review
                fetch('http://localhost:5000/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(review)
                })
                    .then(res => res.json())
                    .then(postreview => {
                        if (postreview.insertedId) {
                            toast.success('Thanks for your review')
                        }
                        else {
                            toast.error('Review not added')
                        }
                        console.log(postreview)

                    })
                console.log(data)

            }
        })

    }
    return (
        <div className='my-10'>
            <h2 className='text-primary font-sans text-2xl'>Give <span className='text-secondary'>Your Review</span></h2>
            <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" readOnly value={user.email} class="input input-bordered input-md w-full max-w-xs mb-2" {...register("email")} />
                <br />
                <input type="text" readOnly value={user.displayName} class="input input-bordered input-md w-full max-w-xs mb-3" {...register("userName")} />
                <br />
                <textarea type="text" placeholder='Write Your Review' class="input input-bordered input-md w-full max-w-xs mb-3 textarea" {...register("review", {
                    required: {
                        value: true,
                        message: "Please give your Review"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.review?.type === 'required' && <span className='label-text-alt text-red-600'>{errors?.review?.message}</span>}
                </label>

                <input type="number" placeholder='Give any Rating' class="input input-bordered input-md w-full max-w-xs mb-3" {...register("rating", {
                    required: {
                        value: true,
                        message: "Please give any Rating"
                    },
                    max: {
                        value: 5,
                        message: 'Rating must be 1-5'
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.rating?.type === 'required' && <span className='label-text-alt text-red-600'>{errors?.rating?.message}</span>}
                    {errors.rating?.type === 'max' && <span className='label-text-alt text-red-600'>{errors?.rating?.message}</span>}
                </label>

                <input type="file" placeholder='Write Your Review' class="input input-bordered input-md w-full max-w-xs mb-3" {...register("image", {
                    required: {
                        value: true,
                        message: "Please upload your image"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.image?.type === 'required' && <span className='label-text-alt text-red-600'>{errors?.image?.message}</span>}
                </label>

                <input type="submit" className='btn btn-primary w-full max-w-xs' value='Review' />
            </form>
        </div>
    );
};

export default AddReview;