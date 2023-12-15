import React, { useContext } from 'react';
import { AtuhContext } from '../UserContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AtuhContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="justify-center flex items-center min-h-[calc(100vh-160px)]">
        <span className="loading loading-infinity loading-md"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location} replace></Navigate>;
};

export default PrivateRoute;
