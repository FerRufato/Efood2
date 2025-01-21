import React from 'react';
import { Imagem, Titulo, Logo } from './styles';

import bannerImg from '../../assets/images/fundo.png';
import logoImg from '../../assets/images/logo.png';

const Banner: React.FC = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Logo src={logoImg} alt="Logo" />
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </Imagem>
);

export default Banner;
