import React from 'react';
import RegisterCP from '../Components/Register';
import CPLayoutLoginRegister from '../Components/LayoutLoginRegister';
import useUser from '../Hooks/useUser';
import { Container } from '../Styles/RegisterPageStyle';

const RegisterPage = () => {
  const { HookCreateUser, ResultApi } = useUser();
  return (
    <Container>
      <CPLayoutLoginRegister>
        <RegisterCP HookCreateUser={HookCreateUser} ResultApi={ResultApi} />
      </CPLayoutLoginRegister>
    </Container>
  );
};

export default RegisterPage;
