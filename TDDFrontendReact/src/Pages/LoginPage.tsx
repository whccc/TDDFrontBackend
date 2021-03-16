import React from 'react';
import LoginCP from '../Components/Login';
import CPLayoutLoginRegister from '../Components/LayoutLoginRegister';
import { Container } from '../Styles/LoginPageStyle';

const LoginPage = () => (
  <Container>
    <CPLayoutLoginRegister>
      <LoginCP />
    </CPLayoutLoginRegister>
  </Container>
);

export default LoginPage;
