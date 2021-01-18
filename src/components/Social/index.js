import React from 'react';

import { FaPinterest, FaMediumM, FaTwitter, FaTwitch, FaGithub, FaJediOrder } from 'react-icons/fa'

import { Container } from './styles';

const Social = () => {
  return (
    <Container>
      <a href="https://br.pinterest.com/">
        <FaPinterest />
      </a>
      <a href="https://medium.com/">
        <FaMediumM />
      </a>
      <a href="https://twitter.com/">
        <FaTwitter />
      </a>
      <a href="https://www.twitch.tv/gaules">
        <FaTwitch />
      </a>
      <a href="https://github.com/">
        <FaGithub />
      </a>
      <a href="https://www.starwars.com/">
        <FaJediOrder />
      </a>
    </Container>
  );
};

export default Social;
