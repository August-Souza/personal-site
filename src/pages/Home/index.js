import React from 'react';

import {Container, Saturn} from './styles'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Saturno from '../../assets/Saturn.svg'


import Social from '../../components/Social';

export default function main() {
  return (
    <Container>
      <Saturn>
        <div className={'content-img'}>
          <img src={Saturno} />
          <div id={"leon"} className={'leon'}/>
          <div id="personality" className={'personality'}/>
          <div id="aboutme" className={'aboutme'}/>
        </div>
      </Saturn>
      <Header />
      <div className={"sideL"}>
        <div className={'sideL-content'}>
        </div>
      </div>
      <div className={"sideR"}>
        <div className={'sideR-content'}>
          <Social />
        </div>
      </div>
      <Footer />
    </Container>
  );
};
