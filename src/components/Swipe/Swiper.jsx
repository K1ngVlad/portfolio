import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { portfolio } from '../../data/portfolio';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

const Swipe = (props) => {
  const onClickHeandler = (id) => {
    props.setPopUpType(id);
    props.setPopUp(true);
  };

  return (
    <>
      <div className="leftNav">{'<'}</div>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          enabled: true,
          el: '.pagination-box',
        }}
        navigation={{
          clickable: true,
          enabled: true,
          prevEl: '.leftNav',
          nextEl: '.rightNav',
        }}
        spaceBetween={50}
        style={{
          height: '100%',
          borderRadius: 10,
          boxShadow: '0 0 10px 1px grey',
        }}
        className="swiper"
        slidesPerView={1}
      >
        {portfolio.map((e) => {
          return (
            <SwiperSlide
              onClick={() => {
                onClickHeandler(e.id);
              }}
              key={e.id}
            >
              <img className="slide" id={e.id} alt={e.name} src={e.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="pagination-box"></div>
      <div className="rightNav">{'>'}</div>
    </>
  );
};

export { Swipe };
