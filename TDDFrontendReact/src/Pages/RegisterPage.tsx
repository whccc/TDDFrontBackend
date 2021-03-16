import React from 'react';
import RegisterCP from '../Components/Register';
import CPLayoutLoginRegister from '../Components/LayoutLoginRegister';
import { Container } from '../Styles/RegisterPageStyle';

const RegisterPage = () => (
  <Container>
    <CPLayoutLoginRegister>
      <RegisterCP />
    </CPLayoutLoginRegister>
  </Container>
);

export default RegisterPage;
