import React from 'react';
import {
  HeaderContainer,
  BackgroundImage,
  Title,
  Logo,
  Wrapper,
  LinkLeft,
  LinkRight,
} from './styles';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => (
  <HeaderContainer>
    <BackgroundImage />
    <Wrapper>
      <LinkLeft>Restaurantes</LinkLeft>
      <Logo src={logo} alt="Logo" />
      <Title></Title>
      <LinkRight>0 produto(s) no carrinho</LinkRight>
    </Wrapper>
  </HeaderContainer>
);

export default Header;
