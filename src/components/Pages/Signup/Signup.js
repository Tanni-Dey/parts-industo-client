import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || gUser)


    let gErrorMessage;
    let signupErrorMessage;
    if (gError || error) {
        gErrorMessage = <p className='text-red-500'><small>{gError?.message}</small></p>;
        signupErrorMessage = <p className='text-red-500'><small>{error?.message}</small></p>;
    }

    if (gLoading || loading || updating) {
        return <Loading />
    }
    // console.log(token);
    if (token) {
        navigate('/')
    }


    const onSubmit = async (data, e) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        if (!error) {
            toast.success('Sent Email')
        }
        e.target.reset()
        console.log(data)
        console.log(user)
    }

    return (
        <div className='my-20'>
            <h2 className='text-primary font-sans text-3xl'>Please <span className='text-secondary'>Sign Up</span></h2>
            <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Your Name" className="input input-bordered input-md w-full max-w-xs mb-2" {...register("name", {
                    required: {
                        value: true,
                        message: "Name is required"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.name?.type === 'required' && <span className='label-text-alt text-red-600'>{errors?.name?.message}</span>}
                </label>
                <input type="email" placeholder="Your Email" className="input input-bordered input-md w-full max-w-xs mb-2" {...register("email", {
                    required: {
                        value: true,
                        message: "Email is required"
                    },
                    pattern: {
                        value: /[A-Za-z]{3}/,
                        message: "Please give any valid email"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.email?.type === 'required' && <span className='label-text-alt text-red-600'>{errors?.email?.message}</span>}
                    {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors?.email?.message}</span>}
                </label>
                <br />
                <input type="password" placeholder="Password" className="input input-bordered input-md w-full max-w-xs mb-3" {...register("password", {
                    required: {
                        value: true,
                        message: "Password is required"
                    },
                    pattern: {
                        value: /[0-9]/,
                        message: "Please give any valid password with Any Number"
                    },
                    minLength: {
                        value: 6,
                        message: "Please give 6 character as a password"
                    }
                })} />
                <label className='label max-w-xs w-full  mx-auto'>
                    {errors.password?.type === 'required' && <span className='label-text-alt  text-red-600'>{errors.password.message}</span>}
                    {errors.password?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                </label><br />
                {signupErrorMessage}
                <input type="submit" className='btn btn-primary w-full max-w-xs' value='Sign up' />
            </form>
            <p >Already have an Account ? <Link className='text-secondary' to='/login'>Login</Link></p>
            <div className="divider mx-auto max-w-xs">OR</div>
            {gErrorMessage}
            <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full max-w-xs'>Google Sign in</button>
        </div>
    );
};

export default Signup;