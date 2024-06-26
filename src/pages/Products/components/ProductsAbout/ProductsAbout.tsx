import { useParams } from 'react-router-dom';
import { sampleProducts } from '../../../../constants/index';
import './productsAbout.scss';
import { Link } from 'react-router-dom';
import { aboutProducts } from '../../../../constants/productAbout';



function ProductsAbout() {
    const { id } = useParams();

    const thisProduct = sampleProducts.find((el) => el.id == (id || 1))

    return (
        <div className='container'>
            <div className="productsAbout-page">
                <h2 className='products-page-title'>{thisProduct?.title}</h2>
                <p className='products-page-description'>
                    <Link className='products-page-link' to={'/'} >Главная</Link>
                    / {thisProduct?.title}
                </p>
            </div>
            <div className="productAbout-block">
                {aboutProducts.map((product, index) => (
                    <div key={index} className="productAbout-card">
                       <div>
                         <img src={product.imageUrl} alt={product.title} className="productAbout-image" />
                       </div>
                        <div className="productAbout-content">
                            <h2 className="productAbout-title">{product.title}</h2>
                            <Link to={"/productsAbout/" + product.id} className='product-button productAbout-btn'>Посмотреть все</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsAbout