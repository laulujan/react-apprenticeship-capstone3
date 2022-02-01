import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, FormContainer, Input, Button } from '../Login/Login.styles';
import { useAuth } from '../../Provider/Auth/Provider';

const Register = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, error } = useAuth();
  let navigate = useNavigate();

  const handleSignin = async () => {
    const user = await register(userEmail, password);
    if (user) {
      navigate('/notes');
    }
  };

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
        <Button onClick={handleSignin}>Register</Button>
        <div>
          Already have an account? <Link to="/login">Login Here</Link>
        </div>
        {error && <div>{error}</div>}
      </FormContainer>
    </Container>
  );
};

export default Register;
