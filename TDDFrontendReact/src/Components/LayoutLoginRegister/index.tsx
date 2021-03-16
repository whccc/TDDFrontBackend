import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import ImgLoginRegister from '../../Images/ImgLoginRegister.jpg';
import {
  Container,
  ContainerImg,
  ContainerDataForm,
  ContainerChildren,
  ContainerNavigationForm,
  ContainerButtons,
} from './style';

const CPLayoutLoginRegister = ({ children }: { children: any }) => {
  const location = useLocation();
  return (
    <Container>
      <ContainerImg>
        <img src={ImgLoginRegister} alt="tormenta" />
      </ContainerImg>
      <ContainerDataForm>
        <ContainerNavigationForm PathLocation={location.pathname}>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </ContainerNavigationForm>
        <ContainerChildren>
          {children}{' '}
          <ContainerButtons>
            <button type="button">
              <FaFacebookF />
            </button>
            <button type="button">
              <FaGooglePlusG />
            </button>
            <button type="button">
              <FaTwitter />
            </button>
          </ContainerButtons>
        </ContainerChildren>
      </ContainerDataForm>
    </Container>
  );
};

export default CPLayoutLoginRegister;
