import React from 'react';
import { ImageContainer, StyledImage } from './styles';
import presentationImg from '../../assets/images/dolce_vitta.png';

const PresentationImage: React.FC = () => (
  <ImageContainer>
    <StyledImage src={presentationImg} alt="Dolce Vitta Apresentação" />
  </ImageContainer>
);

export default PresentationImage;
