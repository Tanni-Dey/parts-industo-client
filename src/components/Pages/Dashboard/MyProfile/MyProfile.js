import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: profile, isLoading, refetch } = useQuery('profile', () => fetch(`https://evening-eyrie-81850.herokuapp.com/profile?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

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
                const profile = {
                    location: data.location,
                    image: img,
                    education: data.education,
                    phone: data.phone,
                    linkedin: data.linkedin
                }
                fetch(`https://evening-eyrie-81850.herokuapp.com/profile?email=${user.email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(profile)
                })
                    .then(res => res.json())
                    .then(info => {
                        if (info.modifiedCount > 0) {
                            refetch()
                        }
                        console.log(info)
                    })
            }
        })

        e.target.reset()
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-primary font-sans text-2xl'>My <span className='text-secondary'>Profile</span></h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='text-left px-10 mt-20'>


                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            {
                                profile.image && <img className='h-44' src={profile.image} alt="Profile" className="rounded-xl" />
                            }
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-secondary font-sans">{user.displayName}</h2>
                            <p>Email : {user.email}</p>
                            <div className="card-actions text-serif text-md">
                                {
                                    profile.location && <p>Address: {profile.location}</p>
                                }
                                {
                                    profile.education && <p>Education: {profile.education}</p>
                                }
                                {
                                    profile.phone && <p>Cell Number: {profile.phone}</p>
                                }
                                {
                                    profile.linkedin && <p>Linkedin Profile Link: <a target='_blank' href={profile.linkedin}>{profile.linkedin}</a> </p>
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <div className='my-10'>
                    <h2 className='text-secondary font-sans text-xl'>Update Profile</h2>
                    <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                        <br />
                        <textarea type="text" placeholder='Write Your Educational Qualification' className="input input-bordered input-md w-full max-w-xs mb-3 textarea" {...register("education")} />

                        <input type="text" placeholder='Write your Location' className="input input-bordered input-md w-full max-w-xs mb-3" {...register("location")} />

                        <input type="number" placeholder='Phone Number' className="input input-bordered input-md w-full max-w-xs mb-2" {...register("phone")} /><br />
                        <input type="text" placeholder='Linkedin Profile Link' className="input input-bordered input-md w-full max-w-xs mb-2" {...register("linkedin")} />

                        <input type="file" className="input input-bordered input-md w-full max-w-xs mb-3" {...register("image")} />
                        <input type="submit" className='btn btn-primary w-full max-w-xs' value='Update Profile' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;