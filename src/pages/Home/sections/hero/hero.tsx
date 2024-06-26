import './hero.scss';
import heroImg from '../../../../assets/images/slide.png'

function Hero() {
    return (
       <div className='hero'>
         <section className='container'>



<div id='hero' className='hero-bottom-block'>
    <div className='hero-bottom-left'>
        <h2 className='hero-bottom-left-title'>
            Анализатор
            ABL800 FLEX
        </h2>
        <p className='hero-bottom-left-text'>
            Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии
        </p>
        <button className='hero-bottom-left-btn'>
        Подробнее
        </button>
    </div>
    <div className='hero-bottom-right'>
        <img src={heroImg} alt="" />
    </div>
</div>

</section>
       </div>
    )
}

export default Hero