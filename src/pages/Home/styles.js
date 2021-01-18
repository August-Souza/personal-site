import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  a {
    text-decoration: none;
  }

  @keyframes slide-top {
    0% {
      transform: translateY(0) rotateZ(0deg);
    }
    100% {
      transform: translateY(-5px) rotateZ(-1deg);
    }
  }

  .sideL {
    width: 50%;
    height: 100vh;
    background: linear-gradient(153.69deg, #201B40 10.94%, #403680 100%);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 1.7);


    .sideL-content {
      width:100%;
      height: 100%;
      display: flex;


      align-items: center;
      margin-left: 100px;

      ul {
        width: 250px;
        position: relative;
        color: #fff;

        li {
          position: absolute;
          opacity: 0;
        }
      }
    }
  }
  .sideR {
    width: 50%;
    height: 100vh;
    display: flex;


    align-items: center;
    justify-content: flex-end;

    .sideR-content {
      margin-right: 50px;
    }
    strong {
      color: #403680;
    }
  }
  .leon-t {
    transition: opacity 1s;
  }
  .leon:hover ~ .leon-t {
    opacity: 1;
  }
`;

export const Saturn = styled.div`
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

  };
`;
