import './commodity.scss'
import { Link, useParams } from 'react-router-dom';
import { aboutProducts } from '../../../../constants/productAbout';
import { commodity } from '../../../../constants/commodity';

function Commodity() {
  const { id } = useParams();

  const thisProduct = aboutProducts.find((el) => el.id == (id || 1));

  return (
    <div className='container'>
      <div className="productsAbout-page">
        <h2 className='products-page-title'>{thisProduct?.title}</h2>
        <p className='products-page-description'>
          <Link className='products-page-link' to={'/'}>Главная</Link>
          /
          <Link to={'/products'} >Продукция</Link>

          / {thisProduct?.title}
        </p>
      </div>

      <div className='commodity'>
          {commodity.map((product, index) => (
            <div  key={index} className="commodity-block">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="commodity-content">
                <p className='commodity-description'>{product.description}</p>
                <p className='commodity-contry commodity-text'>
                  <span className='commodity-span'>Страна:</span>
                  {product.country}</p>
                <p className='commodity-name commodity-text'>
                  <span className='commodity-span'>Производитель:</span>
                  {product.name}</p>
                <Link to={"/commodity/" + product.id } className='product-button'>Посмотреть все</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Commodity;
