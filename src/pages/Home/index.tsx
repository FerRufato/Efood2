import React from 'react';
import Banner from '../../components/Banner';
import ProductList from '../../components/ProductList';

import italiana from '../../assets/images/macarrao.png';
import Food from '../../models/Food';

const Cardapio: Food[] = [
  {
    id: 1,
    category: 'Italiana',
    description:
      'Peça já o melhor da culinária italiana no conforto da sua casa! Massas frescas, molhos deliciosos e pratos tradicionais irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a Itália sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    Infos: ['Italiana'],
    image: italiana,
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'Peça já o melhor da culinária italiana no conforto da sua casa! Massas frescas, molhos deliciosos e pratos tradicionais irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a Itália sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    Infos: ['Italiana'],
    image: italiana,
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'Peça já o melhor da culinária italiana no conforto da sua casa! Massas frescas, molhos deliciosos e pratos tradicionais irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a Itália sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    Infos: ['Italiana'],
    image: italiana,
  },
  {
    id: 4,
    category: 'Italiana',
    description:
      'Peça já o melhor da culinária italiana no conforto da sua casa! Massas frescas, molhos deliciosos e pratos tradicionais irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a Itália sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    Infos: ['Italiana'],
    image: italiana,
  },
  {
    id: 5,
    category: 'Italiana',
    description:
      'Peça já o melhor da culinária italiana no conforto da sua casa! Massas frescas, molhos deliciosos e pratos tradicionais irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a Itália sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    Infos: ['Italiana'],
    image: italiana,
  },
  {
    id: 6,
    category: 'Italiana',
    description:
      'Peça já o melhor da culinária italiana no conforto da sua casa! Massas frescas, molhos deliciosos e pratos tradicionais irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a Itália sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    Infos: ['Italiana'],
    image: italiana,
  },
];

const Home: React.FC = () => (
  <>
    <Banner />
    <ProductList
      title="Hioki Sushi"
      food={Cardapio.filter((item) => item.category === 'Italiana')}
    />
    <ProductList
      title="La Dolce Vita Trattoria"
      food={Cardapio.filter((item) => item.category === 'Italiana')}
    />
  </>
);

export default Home;
