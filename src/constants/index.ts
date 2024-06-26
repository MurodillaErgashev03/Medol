import productImg from "./../assets/images/products1.png";
import productImg2 from "../assets/images/products2.png";
import productImg3 from "../assets/images/products3.png";

interface Products {
  imageUrl: string;
  title: string;
  id: number;
}
export const sampleProducts: Products[] = [
  {
    imageUrl: productImg,
    title: 'Эндоваскулярная хирургия',
    id: 0
  },
  {
    imageUrl: productImg2,
    title: 'Лабораторная диагностика',
    id: 1,
  },
  {
    imageUrl: productImg3,
    title: 'Кардиохирургия',
    id: 2,
  },
  {
    imageUrl: productImg2,
    title: 'ДИАБЕТ',
    id: 3,
  },
  {
    imageUrl: productImg3,
    title: 'ЭНДОУРОЛОГИЯ',
    id: 4,
  },
  {
    imageUrl: productImg,
    title: 'АРИТМОЛОГИЯ',
    id: 5,
  },
  {
    imageUrl: productImg,
    title: 'Эндоваскулярная хирургия',
    id: 6,
  },
  {
    imageUrl: productImg2,
    title: 'Лабораторная диагностика',
    id: 7,
  },
  {
    imageUrl: productImg3,
    title: 'Кардиохирургия',
    id: 8,
  },
  {
    imageUrl: productImg2,
    title: 'ДИАБЕТ',
    id: 9,
  },
  {
    imageUrl: productImg3,
    title: 'ЭНДОУРОЛОГИЯ',
    id: 10,
  },
  {
    imageUrl: productImg,
    title: 'АРИТМОЛОГИЯ',
    id: 11,
  }
];