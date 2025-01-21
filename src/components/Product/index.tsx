import React from 'react';
import { Card, Infos, Titulo, Descricao } from './styles';
import Tag from '../Tag';
import { ButtonLink } from '../Button/styles';

type Props = {
  title: string;
  description: string;
  infos: string[];
  image: string;
  category: string;
};

const Product: React.FC<Props> = ({
  title,
  description,
  infos,
  image,
  category,
}) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info, index) => (
        <Tag key={index}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>

    <ButtonLink to="/categories" title="Saiba Mais">
      Saiba Mais
    </ButtonLink>
  </Card>
);

export default Product;
