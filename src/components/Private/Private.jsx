import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../Provider/Auth/Provider';

function Private({ children }) {
  const { user } = useAuth();
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default Private;
