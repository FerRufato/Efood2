import React from 'react';
import { ButtonContainer, ButtonLink } from './styles';

type Props = {
  type?: 'button' | 'Link';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
};

const Button = ({ type, children, title, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  );
};

export default Button;
