import React from 'react';
import CPNavBar from '../Components/Navbar';
import CPTask from '../Components/Task';
import { Container, ContainerTasks, ContainerListTask } from '../Styles/HomePageStyle';
import CPModalTask from '../Components/ModalTask';

const HomePage = () => (
  <Container>
    <CPNavBar />
    <ContainerTasks>
      <div>
        <h1>Tasks</h1>
        <CPModalTask />
      </div>
      <ContainerListTask>
        <CPTask />
      </ContainerListTask>
    </ContainerTasks>
  </Container>
);

export default HomePage;
