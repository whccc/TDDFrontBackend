import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Container } from './style';
import { IUser } from '../../Interfaces/UserInterface';

const LoginCP = ({ HookLoginUser }: { HookLoginUser: (DataUser: IUser) => Promise<Boolean> }) => {
  const [strEmail, setEmail] = useState('');
  const [strPassword, setPassword] = useState('');
  const history = useHistory();

  const SendDataLogin = (event: any) => {
    event.preventDefault();
    IniciarLogin();
  };

  const IniciarLogin = async () => {
    const JsonLogin = {
      strEmail,
      strPassword,
    };
    const DataResult = await HookLoginUser(JsonLogin);
    if (DataResult) {
      history.push('/');
    }
  };

  return (
    <Container>
      <Form>
        <h2>Inicio Sesión</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={strEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={strPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={SendDataLogin}>
          Iniciar
        </Button>
      </Form>
    </Container>
  );
};

export default LoginCP;
