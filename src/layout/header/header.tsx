import facebook from "../../assets/images/facebook.svg";
import logo from "../../assets/images/glavnilogo.png";
import locationImg from "../../assets/images/location.svg";
import phoneImg from "../../assets/images/phone.svg";
import search from "../../assets/images/search.svg";
import uzImg from "../../assets/images/uzbekistan.svg";
import ruImg from "../../assets/images/russia.svg";
import engImg from "../../assets/images/england.svg";
import Select from "react-select";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  const options = [
    {
      value: "uz",
      label: (
        <div className="option">
          <img className="option-img" src={uzImg} alt="Img error" />{" "}
          <p>O'zbekcha</p>
        </div>
      ),
    },
    {
      value: "ru",
      label: (
        <div className="option">
          <img className="option-img" src={ruImg} alt="Img error" />{" "}
          <p>Русский</p>
        </div>
      ),
    },
    {
      value: "en",
      label: (
        <div className="option">
          <img className="option-img" src={engImg} alt="Img error" />{" "}
          <p>English</p>
        </div>
      ),
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <a className="location-link header-link" href="#">
            <img
              className="location-img"
              src={locationImg}
              alt="location-img"
            />
            г.Ташкент, Чиланзар 10 квартал, дом 3/1
          </a>

          <a className="phone-link header-link" href="#">
            <img className="phone-img" src={phoneImg} alt="phone-img" />
            +998 71 276-62-53 +998 71 276-62-54
          </a>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <img className="header-search" src={search} alt="search" />

          <a className="facebook-link header-link" href="">
            <img className="facebook-img" src={facebook} alt="facebook" />
            Мы на Facebook
          </a>

          <Select
            className="header-selectReact"
            placeholder="Tilni tanlang"
            options={options}
          />
        </div>
        <div className="hero-top-block">
          <a href="#" className="hero-top-item">
            МАГАЗИН
          </a>
          <a href="#company" className="hero-top-item">
            О КОМПАНИИ
          </a>
          <a href="#products" className="hero-top-item">
            ПРОДУКЦИЯ
          </a>
          <a href="#service" className="hero-top-item">
            УСЛУГИ
          </a>
          <a href="#news" className="hero-top-item">
            АКЦИИ И НОВОСТИ
          </a>
          <a href="#footer" className="hero-top-item">
            ОБРАТНАЯ СВЯЗЬ
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
