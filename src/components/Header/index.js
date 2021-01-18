import React from 'react';

import {Container} from './styles'

import logo from '../../assets/AL.svg'


export default function Header() {

  return (
    <Container>
      <a href="#home">
        <img src={logo} />
      </a>
      <a href="#hi">
        <strong>
          say Hi.
        </strong>
      </a>
    </Container>
  );
}
