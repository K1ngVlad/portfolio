import './style.css';
import avatar from '../../assets/avatar/vlad.png';

const TopAbout = () => {
  return (
    <div className="topAbout">
      <img className="avatar" alt="avatar" src={avatar} />
      <div className="aboutInfo">
        <h2 className="aboutName">Владислав Хитрунов</h2>
        <blockquote className="blockquote">
          Правильно выполненная работа — это еще не работа, выполненная
          качественно!
        </blockquote>
      </div>
    </div>
  );
};

export { TopAbout };
