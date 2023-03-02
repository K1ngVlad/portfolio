import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';
import { TopAbout } from '../../components/TopAbout';
import './style.css';

import { skills } from '../../api/skills';
import { Skill } from '../../components/Skill';
import { Footer } from '../../components/Footer';

const About = (props) => {
  useEffect(() => {
    props.setStart(true);
  }, [props]);
  return (
    <div className="about">
      <div className="aboutBox">
        <PageTitle>Обо мне</PageTitle>
        <TopAbout />
        <hr className="aboutHr" />
        <div className="aboutBlock">
          <h3 className="aboutTitle">Обо мне</h3>
          <div className="aboutText">
            <p>Привет! Я живу в Самаре!</p>
            <p>
              Я начинающий веб-разработчик, имеющий небольшой опыт работы на
              фрилансе. Хочу бы трудоустроиться/стажироваться для получения
              большего реального опыта в коммерческой разработке
              проектов/продуктов с перспективой дальнейшего роста.
            </p>
            <p>
              Занимался написанием мелкиех проектов: создавал платёжные формы
              для сайта каллиграфического бюро на React, используя Redux/Redux
              ToolKit для управления состоянием, интегрировал и настраивал
              платёжные системы {'('}Stripe, PayPal{')'} и создавал telegram
              бота на NodeJs. Долгое время обучался и практиковался в написании
              одностраничных веб-приложений и интерфейсов.
            </p>
          </div>
        </div>
        <hr className="aboutHr" />
        <div className="aboutBlock">
          <h3 className="aboutTitle">Мой стек</h3>
          <div>
            {skills.map((e) => {
              return (
                <Skill key={e.name} url={e.url}>
                  {e.name}
                </Skill>
              );
            })}
            <p className="descriptSkills">
              *Нажмите на технологию, чтобы открыть соответствующий официальный
              сайт с документацией
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
