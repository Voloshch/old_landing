import React, { useEffect, useState } from 'react';
import NewsImg from 'images/landing/news.png'
import Menu from 'packs/components/elements/menu';
import Footer from 'packs/components/elements/footer';
import ScrollButton from 'packs/components/elements/scroll_button';
import { Translate, I18n } from '@davidqhr/react-i18nify';
import qs from 'qs';
import xss from 'xss';
import { Link } from 'react-router-dom';

export default function News() {
    const [news, setNews] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [count, setCount] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [lang, setLang] = useState(I18n._localeKey);

    const dates = {
        ru: {
            '01': 'Января',
            '02': 'Февраля',
            '03': 'Марта',
            '04': 'Апреля',
            '05': 'Мая',
            '06': 'Июня',
            '07': 'Июля',
            '08': 'Августа',
            '09': 'Сентября',
            '10': 'Октября',
            '11': 'Ноября',
            '11': 'Декабря',
        },
        en: {
            '01': 'January',
            '02': 'February',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '11': 'December',
        }
    };

    useEffect(() => {
        console.log(I18n)
        fetch('/articles_count')
        .then((response) => {
        response.json()
            .then((data) => {
                setCount(Math.ceil(data / 3));
            });
        })
    }, []);

    useEffect(() => {
        setIsLoad(false);
        fetch('/articles?' + qs.stringify({limit: 3, offset: (currentPage - 1) * 3 }))
        .then((response) => {
        response.json()
            .then((data) => {
                setNews(data);
                setIsLoad(true);
            });
        })
    }, [currentPage]);

    const paging = new Array(count).fill('').map((_, index) => (
        <div key={index} className={currentPage === index + 1 ? 'current' : ''} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
        </div>)
    );

    const articles = news.length && news.map((news, newsNumber) => (
        <div key={newsNumber} className='item'>
          <div className='img_block'>
            <img src={news.image_src} />
          </div>
          <div className='news_info'>
            <h2 className='date'>{news.created_at.substr(8,2)}</h2>
            <p className='date'>{dates[lang][news.created_at.substr(5,2)]}</p>
              <h3>{news[(lang === 'ru' ? '' : 'eng_') + 'title']}</h3>
              <div className='description' dangerouslySetInnerHTML={{__html: xss(news[(lang === 'ru' ? '' : 'eng_') + 'text'])}} />
              <div className='transparent_block' />
              <Link to={`/news/${news.id}`}>
                <button className='btn cloud'>
                    <Translate className='find_out' value="home.news.find_out" tag='p' />
                </button>
              </Link>
              <div className='transparent_block'></div>
          </div>
        </div>
    ));

    return (
        <React.Fragment>
            <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
            <Menu onLanguageChanged={lang => setLang(lang)} />
            <section className='news'>
                <div className='main_img'>
                    <img src={NewsImg} />
                </div>
                <div className='articles'>
                    { articles }
                </div>
                { count && <div className='paging'>
                    <button className='left' disabled={currentPage === 1} onClick={() => setCurrentPage(prevState => prevState - 1)} >Prev</button>
                    { paging }
                    <button className='right' disabled={currentPage === count} onClick={() => setCurrentPage(prevState => prevState + 1)} >Next</button>
                </div> }
            </section>
            <Footer />
        </React.Fragment>
    )
};
