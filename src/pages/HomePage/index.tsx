import React from 'react';

import {
  Container,

} from './styles';
import Product from '../Product';
import Header from '../../components/header';
import SiderBar from '../../components/SiderBar';

const HomePage = () => {

  return (
    <Container>
      <Header />
      <SiderBar />
      <Product />
    </Container>
  );
};

export default HomePage;
