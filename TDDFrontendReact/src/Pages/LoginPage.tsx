import React from 'react';
import LoginCP from '../Components/Login';
import CPLayoutLoginRegister from '../Components/LayoutLoginRegister';
import useUser from '../Hooks/useUser';
import { Container } from '../Styles/LoginPageStyle';

const LoginPage = () => {
  const { HookLoginUser } = useUser();

  return (
    <Container>
      <CPLayoutLoginRegister>
        <LoginCP HookLoginUser={HookLoginUser} />
      </CPLayoutLoginRegister>
    </Container>
  );
};

export default LoginPage;
