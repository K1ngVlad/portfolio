import mySign from '../assets/portfolio/my-sign.png';
import simpleMeal from '../assets/portfolio/food.png';
import simpleWeather from '../assets/portfolio/weather.png';
import theater from '../assets/portfolio/theater.png';

const portfolio = [
  {
    id: 5,
    name: 'Simple meal',
    img: simpleMeal,
    url: 'https://simple-meal.vercel.app/',
    gitHub: 'https://github.com/K1ngVlad/simple-meal',
  },
  {
    id: 3,
    name: 'MySign',
    img: mySign,
    url: 'https://k1ngvlad.github.io/public/',
    gitHub: 'https://github.com/K1ngVlad/public',
  },
  {
    id: 0,
    name: 'Simple weather (мобильная версия)',
    img: simpleWeather,
    url: 'https://simple-weather-bibqahr0z-k1ngvlad.vercel.app/ru',
    gitHub: 'https://github.com/K1ngVlad/simple-weather',
  },
  {
    id: 1,
    name: 'Театр',
    img: theater,
    url: 'https://k1ngvlad.github.io/theater/',
    gitHub: 'https://github.com/K1ngVlad/theater',
  },
];

export { portfolio };
