import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import Container from './styles';

const CPTask = () => (
  <Container>
    <div>
      <p>1. Documentar código</p>
    </div>
    <div>
      <button type="button">
        <MdCancel />
      </button>
      <button type="button">
        <AiFillEdit />
      </button>
    </div>
  </Container>
);

export default CPTask;
