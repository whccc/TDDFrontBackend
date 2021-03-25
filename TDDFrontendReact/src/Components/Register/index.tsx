import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from './style';
import CPMessage from '../Message';
import { IUser } from '../../Interfaces/UserInterface';

const RegisterCP = ({
  HookCreateUser,
  ResultApi,
}: {
  HookCreateUser: (DataUser: IUser) => Promise<void>;
  ResultApi: any;
}) => {
  // STATE
  const [strFullName, setStrFullName] = useState('');
  const [strEmail, setStrEmail] = useState('');
  const [strPassword, setStrPassword] = useState('');

  const [JsonMessage, setJsonMessage] = useState({
    isActive: false,
    variant: '',
    strMessage: '',
  });

  const onHandlerCreateUserClick = (e: any) => {
    e.preventDefault();
    if (!ValidateData()) {
      return;
    }
    CreateUser();
  };

  const CreateUser = async () => {
    const JsonCreateUser = {
      strFullName,
      strEmail,
      strPassword,
    };
    await HookCreateUser(JsonCreateUser);

    setJsonMessage({ variant: 'success', isActive: true, strMessage: 'User create with success' });
  };

  // Validate data
  const ValidateData = () => {
    if (strFullName === '') {
      setJsonMessage({ variant: 'danger', isActive: true, strMessage: 'Enter Full Name' });
      return false;
    }
    if (strEmail === '') {
      setJsonMessage({ variant: 'danger', isActive: true, strMessage: 'Enter Email' });
      return false;
    }
    if (strPassword === '') {
      setJsonMessage({ variant: 'danger', isActive: true, strMessage: 'Enter Password' });
      return false;
    }
    return true;
  };

  return (
    <Container>
      <Form>
        <h2>Registro</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={strFullName}
            placeholder="Enter Full Name"
            onChange={(e: any) => setStrFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={strEmail}
            onChange={(e: any) => setStrEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={strPassword}
            onChange={(e: any) => setStrPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree All the Statements in" />
        </Form.Group>
        <CPMessage isActive={JsonMessage.isActive} variant={JsonMessage.variant} strMessage={JsonMessage.strMessage} />
        <Button variant="primary" type="submit" onClick={onHandlerCreateUserClick}>
          Sing Up
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterCP;
