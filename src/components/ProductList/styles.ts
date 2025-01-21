import styled from 'styled-components';
import { Props } from '.';

export const Container = styled.section<Omit<Props, 'title' | 'food'>>`
  margin-top: 30px; /* Add top margin to the banner */
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
