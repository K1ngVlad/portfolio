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
              Я начинающий веб-разработчик, однако, имеющий некоторый{' '}
              {'(0.5 года)'} коммерческий опыт в написании сайтов и их
              доработке.
            </p>
            <p>
              Долгое время самостоятельно учился и развивался в направлении
              своей области. Несмотря на крайне скромный опыт, работал с
              достаточным количеством интересных и разносторонних проектов, что
              помогло мне сформировать определённые принципы работы.
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
        <hr className="aboutHr" />
      </div>
    </div>
  );
};

export { About };
