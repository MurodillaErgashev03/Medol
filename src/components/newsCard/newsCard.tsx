import  './newsCard.scss';
import React from 'react';

export interface News {
    imageUrl: string;
    title: string;
    description: string;
    date: string;
}


interface NewsListProps {
  news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((newsItem, index) => (
        <div key={index} className="news-card">
          <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image" />
          <div className="news-content">
            <h2 className="news-title">{newsItem.title}</h2>
            <p className="news-date">{newsItem.date}</p>
            <p className="news-description">{newsItem.description}</p>
            <button className='news-button'>Подробнее</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

  