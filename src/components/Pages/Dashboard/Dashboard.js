import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile px-10 lg:px-20">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl text-secondary font-sans mb-5'>Dashboard</h2>
                <label for="my-drawer-2" class="btn btn-primary drawer-button mt-2 lg:hidden">Open menu</label>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-accent text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><NavLink to='/dashboard/myorder'>My Orders</NavLink></li>
                    <li><NavLink to='/dashboard/addreview'>Add Review</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;