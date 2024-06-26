import ProductsCard from '../../../../components/productCard';
import { Product } from '../../../../components/productCard';
import productImg from "../../../../assets/images/products1.png";
import productImg2 from "../../../../assets/images/products2.png";
import productImg3 from "../../../../assets/images/products3.png";
import arrow from "../../../../assets/images/arrow.svg";
import './products.scss';
import { Link } from 'react-router-dom';
const sampleProducts: Product[] = [
  {
    imageUrl: productImg,
    title: 'Эндоваскулярная хирургия',
  },
  {
    imageUrl: productImg2,
    title: 'Лабораторная диагностика',
  },
  {
    imageUrl: productImg3,
    title: 'Кардиохирургия',
  },
  {
    imageUrl: productImg2,
    title: 'ДИАБЕТ',
  },
  {
    imageUrl: productImg3,
    title: 'ЭНДОУРОЛОГИЯ'
  },
  {
    imageUrl: productImg,
    title: 'АРИТМОЛОГИЯ',
  }
];

function  Products ()  {
  return (
    <section id='products' className="container products">
      <h1 className='products-hero-title'>ПРОДУКЦИЯ</h1>
      <ProductsCard products={sampleProducts} />
      <Link className='products-link' to={'./products'}>
        Перейти в каталог нашей продукции
        <img src={arrow} alt="arrow" />
      </Link>
    </section>
  );
};

export default Products;
