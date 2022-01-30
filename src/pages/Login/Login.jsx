import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Provider/Auth/Provider';
import { Container, FormContainer, Input, Button } from './Login.styles';
import { validateLogin } from '../../services/firebase';

const Login = () => {
  const { login, error, user } = useAuth();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = async () => {
    await login(userEmail, password);
    navigate('/notes');
  };

  const validation = (user) => {
    if (user) {
      navigate('/notes');
    }
  };

  useEffect(() => {
    const subscription = validateLogin(validation);
    subscription();
  }, [user]);

  return (
    <Container>
      <FormContainer>
        <label>
          Email
          <Input
            type="email"
            name="user"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button onClick={handleLogin}>Login</Button>
        <div>
          Dont have an account? <Link to="/register">Register Here</Link>
        </div>
        {error && <div>{error}</div>}
      </FormContainer>
    </Container>
  );
};

export default Login;
