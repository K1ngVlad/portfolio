import { useEffect } from 'react';
import { PageTitle } from '../../components/PageTitle';
import { TopAbout } from '../../components/TopAbout';
import './style.css';
import { skills } from '../../data/skills';
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
          <h3 className="aboutTitle">Обо мне</h3>
          <div className="aboutText">
            <p>Привет! Я живу в Самаре!</p>
            <p>
              Я студент. Долгое время самостоятельно обучался и оттачивал
              навыки. Предоставлял услуги фрилансера через знакомых и друзей.
              Создавал платежную форму для сайта каллиграфического бюро на стеке
              React(библиотека для написания интерфейсов), Redux (управление
              состоянием приложения),React-Router-Dom (маршрутизация). Занимался
              интеграцией платежных систем (PayPal, Stripe) на NodeJs и
              Express.Разворачивал приложение на сервере Linux Ubuntu с
              использованием FileZilla и PuTTY. Написал telegram бота для
              отправки уведомлений (также NodeJs). Написал алгоритм оптимального
              размещения элементов на плате путем парных перестановок.
              Разрабатывал и занимался версткой лендингов и интерфейсов разной
              сложности.
            </p>
            <p>
              Делал собственные мелкие тренировочные проекты и игры: канбан
              доска, игра змейка, игра тетрис, недельный календарь, секундомер и
              другие. В настоящий момент активно занимаюсь разработкой SSR
              (Server Side Rendering) приложений на NextJs с использованием
              стороннего REST API.
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
