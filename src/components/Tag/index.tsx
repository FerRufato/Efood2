import React, { ReactNode } from 'react';
import { TagContainer } from './styles';

export type Props = {
  size?: 'small' | 'big';
  children: string | ReactNode;
};

const Tag: React.FC<Props> = ({ children, size = 'small' }) => (
  <TagContainer size={size}>{children}</TagContainer>
);

export default Tag;
