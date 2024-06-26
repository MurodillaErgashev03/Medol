import './company.scss';

import logo2 from '../../../../assets/images/logo2.svg'
import ellipse1 from '../../../../assets/images/Ellipse1.svg'
import ellipse2 from '../../../../assets/images/Ellipse2.svg'
import ellipse3 from '../../../../assets/images/Ellipse3.svg'

function company() {
    return (
        <section id='company' className='company container'>
            <div className='company-block'>
                <h3 className='company-title'>
                О КОМПАНИИ
                </h3>
              <div className='company-block-content'>
              <div className='company-block-left'>
                    <img className='company-block-logo' src={logo2} alt="" />
                    <img className='company-block-ellipse1' src={ellipse1} alt="" />
                    <img className='company-block-ellipse2' src={ellipse2} alt="" />
                    <img className='company-block-ellipse3' src={ellipse3} alt="" />
                </div>
                <div className='company-block-right'>
                <p className='company-block-right-text'>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
                <button className='company-block-right-button' >Узнать больше</button>
                </div>
              </div>
            </div>
        </section>
    )
}

export default company