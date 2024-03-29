import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

import { Navigation, Pagination } from 'swiper';

import { fullPortfolio } from '../../data/fullPortfolio';
import { useEffect } from 'react';
import { PageTitle } from '../../components/PageTitle';

const api = [];

for (let i = 0; i < fullPortfolio.length / 4; i++) {
  const arr = [];
  for (let j = 0; j < 4; j++) {
    arr.push(fullPortfolio[i * 4 + j]);
  }
  api.push(arr);
}

const Portfolio = (props) => {
  useEffect(() => {
    props.setStart(true);
  }, [props]);
  return (
    <div className="portfolio">
      <section className="portfolio-box">
        <PageTitle>Портфолио</PageTitle>
        <Swiper
          className="portfolio-swiper"
          modules={[Navigation, Pagination]}
          loop={true}
          pagination={{
            clickable: true,
            enabled: true,
            bulletActiveClass: 'act-bul',
            renderBullet: (index, className) => {
              return (
                '<span class="' +
                className +
                ' lol noselect">' +
                (index + 1) +
                '</span>'
              );
            },
            el: '.bulBox',
            // currentClass: 'yes',
          }}
          navigation={{
            clickable: true,
            enabled: true,
            prevEl: '.leftPortfolioBtn',
            nextEl: '.rightPortfolioBtn',
          }}
        >
          {api.map((e, i) => {
            return (
              <SwiperSlide className="port-warp" key={i}>
                <div className="portfolioPage">
                  {e.map((e) => {
                    if (e) {
                      return (
                        <a
                          target="_blank"
                          href={e.url}
                          key={e.id}
                          className="noselect x"
                          rel="noreferrer"
                        >
                          <div className="portfolioItem">
                            <img
                              className="portfolioImg"
                              alt={e.name}
                              src={e.img}
                            />
                            <div className="portfolioItemTitle">
                              <h3>{e.name}</h3>
                            </div>
                          </div>
                        </a>
                      );
                    }
                    return null;
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="portfolioBottom">
          <button className="leftPortfolioBtn noselect">🡸</button>
          <div className="bulBox"></div>
          <button className="rightPortfolioBtn noselect">🡺</button>
        </div>
      </section>
    </div>
  );
};

export { Portfolio };
