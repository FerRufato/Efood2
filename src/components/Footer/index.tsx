import React from 'react';
import { FooterContainer, Text, Logo, SocialIcon, Midias } from './styles';
import logoImg from '../../assets/images/logo.png'; // Adjust the path as necessary
import midiasImg from '../../assets/images/redes sociais.png'; // Adjust the path as necessary

const Footer: React.FC = () => (
  <FooterContainer>
    <Logo src={logoImg} alt="Logo" />
    <Midias>
      <SocialIcon src={midiasImg} alt="Redes Sociais" />
    </Midias>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </Text>
  </FooterContainer>
);

export default Footer;
