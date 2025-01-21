import styled from 'styled-components';

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: cover;
  background-position: center;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Titulo = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 33px;
  line-height: 42.19px;
  text-align: center;
  max-width: 500px;
  margin-bottom: 40px;
  white-space: pre-line;
`;
