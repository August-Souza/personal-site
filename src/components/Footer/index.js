import React from 'react';

import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <a href="#writtings" className={'left'}>
        <strong>Writtings.</strong>
      </a>
      <a href="#designings" className={'right'}>
        <strong>Designings.</strong>
      </a>
    </Container>
  );
};

export default Footer;
