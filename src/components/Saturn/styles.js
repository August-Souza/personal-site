import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  position:absolute;
  top:50%;
  left:50%;
  margin-top: calc(500px/2 * -1);
  margin-left: calc(500px/2 * -1);

  filter: drop-shadow( 5px 5px 20px rgba(0,0,0, 1.0));

  animation:slide-top 4s steps(100,end) infinite alternate both;

  .content-img {
    position: relative;
  }

  .personality {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    right: 104px;
    background-color: #fff;
    transition: background-color 1s;

    :hover {
      background-color: #f58845;
    }
  }

  .leon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    bottom: 12px;
    left: 69px;
    background-color: #fff;
    }
  }

  .aboutme {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 47px;
    right: 91px;
    background-color: #fff;
    transition: background-color 1s;

  }
`;
