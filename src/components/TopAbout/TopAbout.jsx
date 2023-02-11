import './style.css';
import avatar from '../../assets/avatar/zwai.png';

const TopAbout = () => {
  return (
    <div className="topAbout">
      <img className="avatar" alt="avatar" src={avatar} />
      <div className="aboutInfo">
        <h2 className="aboutName">Владислав Хитрунов</h2>
        <blockquote className="blockquote">
          Гав вав, "фыркает", ав гав гав, "завывает"
        </blockquote>
      </div>
    </div>
  );
};

export { TopAbout };
