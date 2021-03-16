import styled from 'styled-components';

export const Container = styled.nav`
  & img {
    width: 50px;
  }
  background: #fff;
  & ul {
    margin: 0px;
    padding: 10px;
    display: flex;
    flex-direction: row-gap;
    justify-content: flex-end;
    align-items: center;
    & li {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
      & a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
      }
    }
    & svg {
      font-size: 30px;
      cursor: pointer;
    }
  }
`;

export const Containra = styled.div``;
