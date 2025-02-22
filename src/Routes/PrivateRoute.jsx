import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvide";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="text-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login" state={location.pathname}></Navigate>
    )
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;