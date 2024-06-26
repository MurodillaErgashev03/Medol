import './news.scss';
import arrow from "../../../../assets/images/arrow.svg";

import React from 'react';


import news from "../../../../assets/images/news.svg";
import NewsList, { News } from '../../../../components/newsCard/newsCard';
import { Link } from 'react-router-dom';

const sampleNews: News[] = [
    {
        imageUrl: news,
        title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
        description: 'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
        date: '26.07.2021'
    },
    {
        imageUrl: news,
        title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
        description: 'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
        date: '26.07.2021'
    },
    {
        imageUrl: news,
        title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
        description: 'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
        date: '26.07.2021'
    }
];

const App: React.FC = () => {
    return (
        <section id='news' className="container news">
            <h3 className='news-block-title'>НОВОСТИ</h3>
            <NewsList news={sampleNews} />
            <div className='news-link-block'>
                <Link className='news-link' to={'./news'}>
                    Посмотреть все новости
                    <img src={arrow} alt="arrow" />
                </Link>
                <Link className='news-link' to={'./news'}>
                    Подписаться на новости
                    <img src={arrow} alt="arrow" />
                </Link>
            </div>
        </section>
    );
};

export default App;
