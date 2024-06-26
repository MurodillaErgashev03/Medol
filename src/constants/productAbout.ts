import productImg from "./../assets/images/pb1.png";
import productImg2 from "../assets/images/pb2.png";

interface ProductsAbout {
  imageUrl: string;
  title: string;
  id: number;
}
export const aboutProducts:ProductsAbout [] = [
  {
    imageUrl: productImg,
    title: 'Гемостаз',
    id: 0
  },
  {
    imageUrl: productImg2,
    title: 'Гематология',
    id: 1,
  },
  {
    imageUrl: productImg,
    title: 'Анализатор Газов в крови',
    id: 2,
  },
  {
    imageUrl: productImg2,
    title: 'Микробиологические анализаторы',
    id: 3,
  },
  {
    imageUrl: productImg,
    title: 'Биохимические и Иммунохимические анализаторы',
    id: 4,
  },
];