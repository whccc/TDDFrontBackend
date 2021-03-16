import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #eee;
  & div:nth-child(1) {
    font-weight: bold;
  }
  & div:nth-child(2) {
    text-align: end;
  }
  & div:nth-child(1),
  & div:nth-child(2) {
    flex: 1;
  }
  & p {
    margin: 0px;
  }
  & button {
    font-size: 20px;
    border-radius: 100%;
    border: none;
    color: #fff;
    width: 35px;
    height: 35px;
    margin-left: 5px;
    &:nth-child(1) {
      background-color: tomato;
    }
    &:nth-child(2) {
      background-color: var(--bg-primary);
    }
    & svg {
      margin-top: -5px;
    }
  }
`;

export default Container;
