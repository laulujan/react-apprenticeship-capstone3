import React from 'react';
import { Container, FormContainer, Input, Button } from './Login.styles';

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <label>
          Email
          <Input type="email" name="user" />
        </label>
        <label>
          Password
          <Input type="password" name="password" />
        </label>
        <div>
          <Button>Login</Button>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Login;
