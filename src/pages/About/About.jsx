import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';
import { TopAbout } from '../../components/TopAbout';
import './style.css';

import { skills } from '../../api/skills';
import { Skill } from '../../components/Skill';

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
          <h3 className="aboutTitle">Хто я?</h3>
          <p>
            Я есть пёс, ты есть пёс, все мы пёс, цап за хвост. Пёс собаке лучший
            друг, это знают все вокруг! Трубку в рот, очки на нос - настоящий
            прогер пёс! Опыт мой весьма велик, разберусь со всем за миг. Делал
            сайты на заказ, меня хвалили каждый раз. Из оплаты скуби-снеки, не
            сыскать вкусней вовеки! Баги здесь, баги тут? Ничегоо, не сбегуут!
            Чую я за километр, проверяю миллиметр, спрятаться никак нельзя, дело
            сделано всегда. Сомневаетесь? Рвав, гав, кхе... Вот вам козырь в
            рукаве! Я единственный на свете, континенте и планете. Людей много,
            собак тоже, но они все непохожи. Я могу писать, ходить, ездить,
            прыгать, говорить! Изучать, читать, учить, кодить, думать, кодекс
            чтить. Кодекс мой до воя прост: больше лаешь - больше рост!
          </p>
        </div>
        <hr className="aboutHr" />
        <div className="aboutBlock">
          <h3 className="aboutTitle">Мой стек</h3>
          <p>
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
          </p>
        </div>
        <hr className="aboutHr" />
      </div>
    </div>
  );
};

export { About };
