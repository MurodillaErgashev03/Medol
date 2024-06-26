import './partners.scss';
import pr1 from '../../../../assets/images/pr1.png'
import pr2 from '../../../../assets/images/pr2.png'
import pr3 from '../../../../assets/images/pr3.png'
import pr4 from '../../../../assets/images/pr4.png'
import pr5 from '../../../../assets/images/pr5.png'
import pr6 from '../../../../assets/images/pr6.png'
import pr7 from '../../../../assets/images/pr7.png'
import pr8 from '../../../../assets/images/pr8.png'

function partners() {
    return (
      <div className='partners'>
          <section className='container'>
            <h3 className='partners-title'>
                ПАРТНЕРЫ
            </h3>
            <div className='partners-block'>
                <div className='partners-block-item'>
                    <img src={pr1} alt="" />
                </div>
                <div className='partners-block-item'>
                    <img src={pr2} alt="" />
                </div>
                <div className='partners-block-item'>
                    <img src={pr3} alt="" />
                </div>
                <div className='partners-block-item'>
                    <img src={pr4} alt="" />
                </div>
                <div className='partners-block-item'>
                    <img src={pr5} alt="" />
                </div>
                <div className='partners-block-item'>
                    <img src={pr6} alt="" />
                </div>
                <div className='partners-block-item'>
                    <img src={pr7} alt="" />
                </div>
                <div className='partners-block-item'>
                    <img src={pr8} alt="" />
                </div>

            </div>
        </section>
      </div>
    )
}

export default partners