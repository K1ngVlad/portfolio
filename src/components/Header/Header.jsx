import './styles.css';
import { links } from './links';

const Header = (props) => {
  return (
    <header className={`Header ${props.className}`}>
      <h1 className="headerTitle">Портфолио</h1>
      <div className="logo">
        <a href="mailto:kingvlad3008@gmail.com">
          <button className="btn">Написать на почту</button>
        </a>
      </div>
      <div className="links-box">
        {links.map((e, i) => {
          return (
            <a
              target="_blank"
              id={`link_${i}`}
              href={e.link}
              key={e.name}
              rel="noreferrer"
            >
              <img className="link" src={e.img} alt={e.name} />
            </a>
          );
        })}
      </div>
    </header>
  );
};

export { Header };
