import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const {pathname} = useLocation();
    console.log(pathname);
    if(loading){
        return <div className='flex min-h-screen justify-center items-center'>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    if(user && user.email){
        return children;
    }

    return <Navigate state={pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;