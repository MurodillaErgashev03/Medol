import { sampleNewsPage } from '../../constants/news';
import './news.scss';
import { Link } from 'react-router-dom';


function News() {
  return (
    <div className='container news-page'>

      <div className="products-page-top">
        <h3 className='products-page-title'>
          Новости и Акции
        </h3>
        <p className='products-page-description'>
          <Link className='products-page-link' to={'/'} >Главная</Link>
          /  Новости и акции
        </p>
      </div>

      <div className='news-main-block'>
        <button className='news-main-news-btn'>
          Новости
        </button>
        <button className='news-main-action-btn'>
          Акции
        </button>
      </div>

      <div className="news-list">
        {sampleNewsPage.map((newsItem, index) => (
          <div key={index} className="news-card">
            <img src={newsItem.imageUrl} alt={newsItem.imageUrl} className="" />
            <div className="news-content">
              <h2 className="news-title">{newsItem.title}</h2>
              <p className="news-date">{newsItem.date}</p>
              <p className="news-description">{newsItem.description}</p>
              <button className='news-button'>Подробнее</button>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default News