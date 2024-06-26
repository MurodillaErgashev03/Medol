import React from 'react';
import './commodityAbout.scss';
import { Link, useParams } from 'react-router-dom';
import images from '../../../../assets/images/pb1.png';
import facebook from '../../../../assets/images/comFacebook.svg';
import insragam from '../../../../assets/images/comInstageram.svg';
import telegram from '../../../../assets/images/comTelegram.svg';
import { commodity } from '../../../../constants/commodity';


function CommodityAbout() {
  const { id } = useParams();

  const thisProduct = commodity.find((el) => el.id == (id || 1));

  return (
    <div className='container commodityAbout'>

      <div className="productsAbout-page">
        <h2 className='products-page-title'>
          {thisProduct?.description}
        </h2>
        <p className='products-page-description'>
          <Link className='products-page-link' to={'/'}>Главная</Link>
          /
          <Link to={'/products'} >Продукция</Link>

          / {thisProduct?.description}
        </p>
      </div>

      <div className='commodityAbout-top-block'>
        <div className='commodityAbout-images-block'>
          <img className='commodityAbout-images' src={thisProduct?.imageUrl} alt="" />
        </div>
        <div className='commodityAbout-content'>
          <p className='commodityAbout-text'>
            <span className='commodityAbout-span'>
              Страна:
            </span>
            {thisProduct?.country}
          </p>
          <p className='commodityAbout-text'>
            <span className='commodityAbout-span'>
              Категория:
            </span>
            Гемостаз
          </p>
          <p className='commodityAbout-text'>
            <span className='commodityAbout-span'>
              Производитель:
            </span>
            {thisProduct?.name}
          </p>
          <p className='commodityAbout-description'>
            Автоматический настольный анализатор гемостаза для
            лабораторий среднего размера.
          </p>
          <button className='commodityAbout-price-btn'>
            Запросить цену
          </button>
          <button className='commodityAbout-application-btn'>
            Оставить заявку
          </button>
          <div className='commodityAbout-share-block'>
            <p className='commodityAbout-share-text'>
              Поделится
            </p>
            <div className='commodityAbout-messenger-block'>
              <a href="commodityAbout-facebook">
                <img className='commodityAbout-facebook-img' src={facebook} alt="" />
              </a>

              <a href="commodityAbout-facebook">
                <img className='commodityAbout-facebook-img' src={insragam} alt="" />
              </a>
              <a href="commodityAbout-facebook">
                <img className='commodityAbout-facebook-img' src={telegram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='commodityAbout-main-block'>
        <button className='commodityAbout-description-btn'>
          Описание
        </button>
        <button className='commodityAbout-attached-btn'>
          Приложенные документы
        </button>
      </div>

      <div className='commodityAbout-bottom-block'>
        <p className='commodityAbout-bottom-text'>
          <span className='commodityAbout-bottom-text'>
            Производитель:
          </span>
          {thisProduct?.name}
        </p>
        <p className='commodityAbout-bottom-text'>
        {thisProduct?.description}
        </p>
        <p className='commodityAbout-bottom-description'>
          Автоматический настольный анализатор гемостаза для лабораторий среднего размера
        </p>

        <div className='commodityAbout-bottom-list'>
          <p className='commodityAbout-bottom-title'>Умный способ тестирования</p>
          <p className='commodityAbout-bottom-description'>• 4 независимых измерительных канала</p>
          <p className='commodityAbout-bottom-description'>• 14 охлаждаемых + 4 встроенных реагента</p>
          <p className='commodityAbout-bottom-description'>• 10 образцов + 5 положений образца STAT</p>
          <p className='commodityAbout-bottom-description'>• Автоматическая рефлексия и способность к повторному запуску</p>
          <p className='commodityAbout-bottom-description'>• Основная калибровочная кривая (калибровка не требуется)</p>
          <p className='commodityAbout-bottom-title'>Комплексная безопасность</p>
          <p className='commodityAbout-bottom-description'>• Положительная идентификация</p>
          <p className='commodityAbout-bottom-description'>• Внутреннее хранилище данных, встроенный компьютер</p>
          <p className='commodityAbout-bottom-description'>• Готовые к использованию реагенты</p>
          <p className='commodityAbout-bottom-title'>Повышенная эффективность</p>
          <p className='commodityAbout-bottom-description'>• 3 эталонных метода измерения: коагуляционный, иммунотурбидиметрический и хромогенный</p>
          <p className='commodityAbout-bottom-description'>• Непрерывная загрузка: 60 образцов/600 кювет</p>
          <p className='commodityAbout-bottom-description'>• Производительность 160 тестов в час</p>
          <p className='commodityAbout-bottom-description'>• Бесплатная поддержка</p>
          <p className='commodityAbout-bottom-title'>Удобные функции</p>
          <p className='commodityAbout-bottom-description'>• Интеллектуальное управление контролем качества</p>
          <p className='commodityAbout-bottom-description'>• Инновационный пользовательский интерфейс</p>
          <p className='commodityAbout-bottom-description'>• Несколько подключений: Лабораторная информационная система - VPN</p>
        </div>
      </div>
    </div>
  )
}

export default CommodityAbout