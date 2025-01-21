import styled from 'styled-components';
import { Cores } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Card = styled.div`
  background-color: #fff;
  padding: 8px;
  position: relative;
  display: block;
  margin-bottom: 20px;
  border: 1px solid ${Cores.secondary};

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 14px;
  color: ${Cores.secondary};
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Descricao = styled.p`
  font-size: 16px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 14px;
  font-family: 'Roboto', sans-serif;
`;
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
