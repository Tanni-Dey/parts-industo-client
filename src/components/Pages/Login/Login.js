import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = (data, e) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
        e.reset()
        console.log(data)
    }


    if (gLoading || loading) {
        return <Loading />
    }

    if (user || gUser) {
        navigate('/')
    }

    let gErrorMessage;
    let loginErrorMessage;

    if (gError || error) {
        gErrorMessage = <p className='text-red-500'><small>{gError?.message}</small></p>;
        loginErrorMessage = <p className='text-red-500'><small>{error?.message}</small></p>;
    }

    return (
        <div className='my-20'>
            <h2 className='text-primary font-sans text-3xl'>Please <span className='text-secondary'>Login</span></h2>
            <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Your Email" class="input input-bordered input-md w-full max-w-xs mb-2" {...register("email", {
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
                <input type="password" placeholder="Password" class="input input-bordered input-md w-full max-w-xs mb-3" {...register("password", {
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
                {loginErrorMessage}
                <input type="submit" className='btn btn-primary w-full max-w-xs' value='Login' />
            </form>
            <p >Create an Account ? <Link className='text-secondary' to='/signup'>Sign up</Link></p>
            <p>forget password ? <button className='text-secondary' >Reset Password</button></p>
            <div class="divider mx-auto max-w-xs">OR</div>
            {gErrorMessage}
            <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full max-w-xs'>Google Sign in</button>
        </div>
    );
};

export default Login;