import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from './style';

const LoginCP = () => {
  const SendDataLogin = (event: any) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Form>
        <h2>Inicio Sesión</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={SendDataLogin}>
          Iniciar
        </Button>
      </Form>
    </Container>
  );
};

export default LoginCP;
