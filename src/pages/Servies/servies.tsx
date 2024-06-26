import './servies.scss';
import images from '../../assets/images/sp1.png';
import images1 from '../../assets/images/sp2.png';
import images2 from '../../assets/images/sp3.png';
import { Link } from 'react-router-dom';

interface Servise {
  discription: string;
  images: string;
}

let servise: Servise[] = [
  {
    discription: 'Гарантийное и пост-гарантийное сервисное обслуживание медицинского оборудования',
    images: images,
  },
  {
    discription: 'Государственная регистрация медицинских изделий на территории Республики Узбекистан',
    images: images1,
  },
  {
    discription: 'Инсталляция и пуско-наладочные работы медицинского оборудования',
    images: images2,
  },
  {
    discription: 'Гарантийное и пост-гарантийное сервисное обслуживание медицинского оборудования',
    images: images2,
  },
  {
    discription: 'Обучение медицинского персонала работе с медицинским оборудованием',
    images: images1,
  },
  {
    discription: 'Ремонт медицинского оборудования Консультация по медицинскому оборудованию',
    images: images,
  },
]


function servies() {
  return (
    <div className='container servise-page'>
      <div className='servise-page-hero'>
        <h3 className='servise-page-title'>
          Наши услуги
        </h3>
        <p className='servise-page-description'>
          <Link className='servise-page-link' to={'/'} >Главная</Link>
          / Наши услуги
        </p>
      </div>
      <div className='servise-page-cards'>
        {servise.map((post, i) => (
          <div className='servise-page-card'> 
          <img className='servise-page-card-image' src={post.images} alt="" />
            <p className='servise-page-card-text'>{post.discription}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default servies