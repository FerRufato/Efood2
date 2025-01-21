import styled from 'styled-components';
import { Cores } from '../../styles';

export const FooterContainer = styled.footer`
  width: 100%; /* Make the footer width responsive */
  height: 298px;
  position: relative;
  gap: 0px;
  opacity: 1; /* Set opacity to 1 to make it visible */
  text-align: center;
  background-image: url('/assets/images/rodape.png'); /* Use absolute path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${Cores.primary};
`;
export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  alihn itens: center;
  margin-top: 40px;
`;

export const Midias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
export const Text = styled.p`
  width: 480px
  height: 24px
  font-size: 16px;
  display: block;
  font-family: 'Roboto', sans-serif;
  color: ${Cores.secondary};
  margin-top: 60px;


`;

export const SocialIcon = styled.img`

  height: 20px;
  margin top: 50px;
`;
