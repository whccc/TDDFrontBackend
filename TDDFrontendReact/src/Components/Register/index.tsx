import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from './style';

const RegisterCP = () => (
  <Container>
    <Form>
      <h2>Registro</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree All the Statements in" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sing Up
      </Button>
    </Form>
  </Container>
);

export default RegisterCP;
