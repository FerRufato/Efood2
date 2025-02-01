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
      <LinkLeft>0 produto(s) no carrinho</LinkLeft>
      <Logo src={logo} alt="Logo" />
      <Title></Title>
      <LinkRight>Restaurantes</LinkRight>
    </Wrapper>
  </HeaderContainer>
);

export default Header;
