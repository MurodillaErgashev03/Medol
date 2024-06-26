import { useNavigate } from 'react-router-dom';
import './productCard.scss';


export interface Product  {
    imageUrl: string;
    title: string;
  }
  interface ProductsProps {
    products: Product[];
  }
  


  const ProductsCard: React.FC<ProductsProps> = ({ products }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('./products');
    };
  
    return (
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <div className="product-content">
              <h2 className="product-title">{product.title}</h2>
              <button onClick={handleRedirect}  className='product-button'>Посмотреть все</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductsCard;