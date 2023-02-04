import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { portfolio } from '../../api/portfolio';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

import './style.css';

const Swipe = (props) => {
  const onClickHeandler = (id) => {
    props.setPopUpType(id);
    props.setPopUp(true);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={{ clickable: true }}
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
  );
};

export { Swipe };
