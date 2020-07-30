import React from 'react';
import { Container } from 'reactstrap';
import Header from '../layout/Header';
import Recipe from '../../features/recipe';

function Home() {
  return (
    <Container>
      <Header />
      <Recipe />
    </Container>
  );
}

export default Home;