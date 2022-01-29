import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../Provider/Auth/Provider';
import { validateLogin } from '../../services/firebase';

function Private({ children }) {
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();

  const validation = (user) => {
    if (user) {
      refreshUser(user);
    } else {
      navigate('/login');
    }
  };

  useEffect(async () => {
    if (!user) {
      const subscription = validateLogin(validation);
      subscription();
    }
  }, [user]);

  return children;
}

export default Private;
