  import { Link, useNavigate } from "react-router-dom";
  
  import './products.scss';
import { sampleProducts } from "./../../constants/index";






  function products() {
    
    return (
      <div className="container products-page">
        <div className="products-page-top">
          <h3 className='products-page-title'>
            ПРОДУКЦИЯ
          </h3>
          <p className='products-page-description'>
            <Link className='products-page-link' to={'/'} >Главная</Link>
            / продукция
          </p>
        </div>
        <div className="product-list">
          {sampleProducts.map((product, index) => (
            <div  key={index} className="product-card">
              <img src={product.imageUrl} alt={product.title} className="product-image" />
              <div className="product-content">
                <h2 className="product-title">{product.title}</h2>
                <Link to={"" + product.id } className='product-button'>Посмотреть все</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default products