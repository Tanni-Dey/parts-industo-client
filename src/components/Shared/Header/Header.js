import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user ? <li><NavLink onClick={() => signOut(auth)} to='/login'>Logout</NavLink></li> : <li><NavLink to='/login'>Login</NavLink></li>
        }
        {
            !user && <li><NavLink to='/signup'>SignUp</NavLink></li>
        }
        {
            user && <li> <NavLink to='/dashboard'>Dashboard</NavLink></li>
        }
        <li><NavLink to='/portfolio'>My Portfolio</NavLink></li>
        <li><NavLink to='/blog'>Blogs</NavLink></li>
        {
            user && <div class="avatar lg:online placeholder">
                <div class="bg-accent-focus text-white-content rounded-full w-12">
                    <span class="text-xs p-2">{user.displayName} </span>
                </div>
            </div>
        }
    </>
    console.log(user);
    return (
        <div className='bg-primary lg:px-20'>
            <div class="navbar text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Parts Industo</Link>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;