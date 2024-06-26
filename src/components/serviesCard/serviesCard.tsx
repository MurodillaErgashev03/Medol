import { useNavigate } from 'react-router-dom';
import './serviesCard.scss';

export interface Service {
    imageUrl: string;
    title: string;
    description: string;
 }

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {

    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('./servies');
    };
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.imageUrl} alt={service.title} className="service-image" />
          <div className="service-content">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <button onClick={handleRedirect}   className="service-button">Подробнее</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
