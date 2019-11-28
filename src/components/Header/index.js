import React from 'react';

import {Container, HeaderImage} from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderImage
        source={{uri: 'http://cdn.dota2.com/apps/dota2/images/nav/logo.png'}}
      />
    </Container>
  );
}
