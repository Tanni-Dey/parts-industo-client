import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    console.log(admin);
    return (
        <div className='drop-shadow-2xl shadow-secondary'>
            <h2 className='text-3xl text-primary font-sans mb-5'>My Dashboard</h2>
            <div className="drawer drawer-mobile p-10   lg:px-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content border-2 p-5 bg-white border-gray-200 rounded-lg">

                    <label for="my-drawer-2" className="btn btn-primary drawer-button mt-2 lg:hidden">Open menu</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-5 overflow-y-auto text-secondary font-bold rounded-lg w-44 lg:w-60  bg-white border-2 border-gray-200 ">
                        {/* <!-- Sidebar content here --> */}
                        <div class="avatar flex justify-center online placeholder">
                            <div class="w-24 rounded-full">
                                <img src={user.photoURL} alt='' />
                            </div>
                        </div>
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <>
                                <li><NavLink to='/dashboard/myorder'>My Orders</NavLink></li>
                                <li><NavLink to='/dashboard/addreview'>Add Review</NavLink></li>
                            </>
                        }
                        {
                            admin && <>
                                <li><NavLink to='/dashboard/makeadmin'>Make Admin</NavLink></li>
                                <li><NavLink to='/dashboard/addproduct'>Add Product</NavLink></li>
                                <li><NavLink to='/dashboard/manageproducts'>Manage Products</NavLink></li>
                                <li><NavLink to='/dashboard/manageorders'>Manage All Orders</NavLink></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Dashboard;