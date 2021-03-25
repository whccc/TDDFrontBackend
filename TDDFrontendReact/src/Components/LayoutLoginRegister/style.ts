import styled from 'styled-components';

interface INavigation {
  PathLocation: string;
}

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  font-weight: 500;
  width: 95%;
  max-width: 1000px;
  overflow: hidden;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    height: 520px;
  }
`;

export const ContainerImg = styled.div`
  display: none;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  @media (min-width: 1000px) {
    display: block;
    width: 50%;
  }
`;

export const ContainerDataForm = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  width: 100%;

  @media (min-width: 1000px) {
    width: 50%;

    & > div:nth-child(2) {
      padding: 20px;
    }
  }
`;
export const ContainerChildren = styled.div`
  @media (min-width: 1000px) {
    overflow: auto;
    max-height: 480px;
  }
`;
export const ContainerNavigationForm = styled.div<INavigation>`
  text-align: right;
  & a {
    padding: 10px;
    display: inline-block;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #000;
    &:nth-child(${(props) => (props.PathLocation === '/Login' ? 1 : 2)}) {
      background-color: var(--bg-primary);
      color: #fff;
    }
  }
`;

export const ContainerButtons = styled.div`
  text-align: center;
  & button {
    color: #fff;
    border: none;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    margin: 5px;
  }
  & button:nth-child(1) {
    background-color: #3e5c9a;
  }
  & button:nth-child(2) {
    background-color: #df4b38;
  }
  & button:nth-child(3) {
    background-color: #29a9e1;
  }
`;
