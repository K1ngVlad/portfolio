import './styles.css';
import { links } from './links';

const Header = (props) => {
  return (
    <header className={`Header ${props.className}`}>
      <h1 className="headerTitle">Портфолио</h1>
      <div className="logo"></div>
      <div className="links-box">
        {links.map((e, i) => {
          return (
            <a id={`link_${i}`} href={e.link} key={e.name}>
              <img className="link" src={e.img} alt={e.name} />
            </a>
          );
        })}
      </div>
    </header>
  );
};

export { Header };
