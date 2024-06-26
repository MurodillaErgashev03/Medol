import './footer.scss';
import phoneImg from '../../assets/images/phone.svg';
import locationImg from '../../assets/images/location.svg';
import emailImg from '../../assets/images/email.svg';
import footerlogo from '../../assets/images/glavnilogo.png';

function Footer() {
  return (
    <footer id='footer' className='footer'>
      <div className='container footer-top-block'>
        <div className='footer-leftBlock'>
          <div className='footer-contacts'>
            <h4 className='footer-contacts-title'>
              Контакты
            </h4>
            <a className='footer-location-link footer-link' href="#">
              <img className='location-img' src={locationImg} alt="location-img" />
              г.Ташкент, Чиланзар
              10 квартал, дом 3/1
            </a>
            <a className='footer-phone-link footer-link' href="#">
              <img className='phone-img' src={phoneImg} alt="phone-img" />
              +998 71 276-62-53
              +998 71 276-62-54
            </a>
            <a className='footer-email-link footer-link' href="#">
              <div className='phone-img-block'><img className='phone-img' src={emailImg} alt="phone-img" /></div>
              info@medol.uz
            </a>
            <button className='footer-btn'>
              Оставить заявку
            </button>

            <img src={footerlogo} alt="footerlogo" />

            <p className='footer-contacts-text'>
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.
            </p>

            <p className='footer-contacts-textbottom'>
              © 2021 ООО «Medical Online Services»
            </p>

          </div>
        </div>

        <div className='footer-rightBlock'>
          <div className='footer-company-block'>
            <h5 className='footer-item-title'>
              О компании
            </h5>
            <p className='footer-item-text'>
              История
            </p>
            <p className='footer-item-text'>
              Партнеры
            </p>
            <p className='footer-item-text'>
              Вакансии
            </p>
          </div>

          <div className='footer-products-block'>
            <h5 className='footer-item-title'>
              Продукция
            </h5>
            <p className='footer-item-text'>
              Аритмология
            </p>
            <p className='footer-item-text'>
              Кардиохирургия
            </p>
            <p className='footer-item-text'>
              Лабораторная диагностика
            </p>
            <p className='footer-item-text'>
              Хирургия
            </p>
            <p className='footer-item-text'>
              Эндоурология
            </p>
            <p className='footer-item-text'>
              Нейрохирургия
            </p>
            <p className='footer-item-text'>
              Анестезиология и реанимация
            </p>
            <p className='footer-item-text'>
              Диабет
            </p>
          </div>

          <div className='footer-services-block'>
            <h5 className='footer-item-title'>
              Услуги
            </h5>
            <p className='footer-item-text'>
              Сервис
            </p>
            <p className='footer-item-text'>
              Регистрации
            </p>
            <p className='footer-item-text'>
              Услуги логистики
            </p>
          </div>
          <h5 className='rightBlock-bottomText'>
            Редизайн сайта
          </h5>
        </div>

      </div>
    </footer>
  )
}

export default Footer