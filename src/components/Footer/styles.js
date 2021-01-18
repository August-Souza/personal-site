import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;

  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  a {
    margin: 0 50px;;
  }

  .left {
    color: #fff;
  }
  .right {
    color: #403680;
  }
`;
