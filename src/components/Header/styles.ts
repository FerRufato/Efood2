import styled from 'styled-components';
import background from '../../assets/images/Vector.png';
import { Cores } from '../../styles';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 186px;
  position: relative;
  padding: 16px;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  left: 50%; /* Centraliza o logo */
  transform: translateX(-50%); /* Ajuste para garantir centralização perfeita */
`;

export const Title = styled.h1``;

export const LinkLeft = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  weight: 900;
  line-height: 21px;
  color: ${Cores.secondary};
  text-decoration: none;
  position: absolute;
  left: 20px;
`;

export const LinkRight = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  weight: 900;
  line-height: 21px;
  color: ${Cores.secondary};
  text-decoration: none;
  position: absolute;
  right: 20px;
`;
