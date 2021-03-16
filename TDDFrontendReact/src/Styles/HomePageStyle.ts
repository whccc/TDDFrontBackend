import styled from 'styled-components';

export const Container = styled.div``;
export const ContainerListTask = styled.div`
  margin-top: 20px;
`;
export const ContainerTasks = styled.div`
  padding-top: 30px;
  max-width: 500px;
  margin: auto;
  & button {
    background-color: var(--bg-primary);
    border: none;
  }
  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
  }
  & h1 {
    display: inline-block;
    color: #fff;
    margin: 0px;
    margin-right: 5px;
  }
`;
