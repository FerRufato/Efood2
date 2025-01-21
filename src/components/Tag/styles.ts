import styled from 'styled-components';
import { Cores } from '../../styles';

import { Props } from './index';

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.secondary};
  color: ${Cores.primary};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '10px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  cursor: pointer;
  text-align: center;
`;
