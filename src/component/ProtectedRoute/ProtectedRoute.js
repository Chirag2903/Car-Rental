import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Loader from '../layout/Loader';

const ProtectedRoute = ({ Component }) => {
    const { loading, isauthenticated } = useSelector((state) => state.user);

    if (loading === false) {
        if (isauthenticated === false) {
            return <Navigate to="/login" />;
        }

        return <Component />;
    }

    return <Loader />;
}

export default ProtectedRoute