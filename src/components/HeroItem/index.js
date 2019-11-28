import React from 'react';

import {
  Container,
  Avatar,
  ImageTitle,
  TitleContainer,
  Icon,
  StatsContainer,
  StatsText,
} from './styles';

export default function HeroItem({item}) {
  return (
    <Container>
      <TitleContainer>
        <Icon source={{uri: `https://api.opendota.com${item.icon}`}} />
        <ImageTitle>{item.localized_name}</ImageTitle>
      </TitleContainer>
      <Avatar source={{uri: `https://api.opendota.com${item.img}`}} />
      <StatsContainer>
        <StatsText>Roles: {item.roles.map(role => `${role} `)}</StatsText>
        <StatsText>Attack Type: {item.attack_type}</StatsText>
        <StatsText>Attack Range: {item.attack_range}</StatsText>
        <StatsText>Move Speed: {item.move_speed}</StatsText>
        <StatsText>Armor: {item.base_armor}</StatsText>
      </StatsContainer>
    </Container>
  );
}
