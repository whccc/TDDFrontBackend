import React from 'react';
import { Link } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import ImgPerson from '../../Images/Person.png';
import { Container } from './styles';

const CPNavBar = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">Wilson Herney Castro Cabrera</Link>
      </li>
      <li>
        <img src={ImgPerson} alt="person" />
      </li>
      <li>
        <IoExitOutline />
      </li>
    </ul>
  </Container>
);

export default CPNavBar;
