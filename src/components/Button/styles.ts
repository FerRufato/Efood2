import styled from 'styled-components';
import { Cores } from '../../styles';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.button`
  background-color: ${Cores.secondary};
  width: 82px;
  height: 24px;
  color: ${Cores.primary};
  borders: mixed ${Cores.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ButtonLink = styled(Link)`
  background-color: ${Cores.secondary};
  width: 82px;
  height: 24px;
  color: ${Cores.primary};
  borders: mixed ${Cores.primary};
  font-size: 14px;

  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;
