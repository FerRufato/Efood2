import React from 'react';
import Product from '../Product';
import Food from '../../models/Food';

import { Container, List } from './styles';

export type Props = {
  title: string;
  food: Food[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductList: React.FC<Props> = ({ title, food }) => (
  <Container>
    <div className="container">
      <List>
        {food.map((food) => (
          <Product
            key={food.id}
            category={food.category || ''}
            description={food.description || ''}
            image={food.image || ''}
            infos={food.Infos || []}
            title={food.title || ''}
          />
        ))}
      </List>
    </div>
  </Container>
);

export default ProductList;
