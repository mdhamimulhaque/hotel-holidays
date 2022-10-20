import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (<div className="flex items-center justify-center space-x-2 py-40">
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-700 dark:bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-700 dark:bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-700 dark:bg-blue-400"></div>
        </div>)
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate to='/log-in' state={{ from: location }} replace />
};

export default PrivateRoute;