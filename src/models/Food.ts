// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Infos } from '../components/Product/styles';

class Food {
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
  Infos: string[] | undefined;
  title: string | undefined;
  id: number | undefined;

  constructor(
    category: string,
    description: string,
    image: string,
    Infos: string[],
    title: string,
    id: number
  ) {
    this.category = category;
    this.description = description;
    this.image = image;
    this.Infos = Infos;
    this.title = title;
    this.id = id;
  }
}

export default Food;
