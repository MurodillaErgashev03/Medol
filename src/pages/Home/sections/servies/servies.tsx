import './servies.scss';
import ServiesCard, { Service } from '../../../../components/serviesCard/serviesCard';
import serviseImg from "../../../../assets/images/servies1.png";
import serviseImg2 from "../../../../assets/images/servies2.png";
import serviseImg3 from "../../../../assets/images/servies3.png";
import Services from '../../../../components/serviesCard/serviesCard';

const sampleServices: Service[] = [
  {
    imageUrl: serviseImg,
    title: 'СЕРВИС ОБОРУДОВАНИЯ',
    description: 'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......'
  },
  {
    imageUrl: serviseImg2,
    title: 'РЕГИСТРАЦИИ',
    description: 'Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....'
  },
  {
    imageUrl: serviseImg3,
    title: 'УСЛУГИ ЛОГИСТИКИ',
    description: 'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....'
  },
];

function Servies() {
  return (
    <section id='service' className='section-servise' >
      <h3 className='servies-hero-title'>
        УСЛУГИ
      </h3>
      <div className='servies'>
        <div className='container servies-cards'>
          <Services services={sampleServices} />
        </div>
      </div>
    </section>
  )
}

export default Servies