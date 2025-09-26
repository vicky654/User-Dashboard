import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation(); // Get current location
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  if (!isLoggedIn && location.pathname !== "/login") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRouter;
