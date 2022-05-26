import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Loading/Loading';

const RequireUser = ({ children }) => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation()
    if (adminLoading) {
        return <Loading />
    }
    if (admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};


export default RequireUser;