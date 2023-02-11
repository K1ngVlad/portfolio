import './styles.css';
import { links } from './links';

const Header = (props) => {
  return (
    <header className={`Header ${props.className}`}>
      <h1 className="headerTitle">Сайт-Портфолио</h1>
      <div className="logo">
        <a href="mailto:kingvlad3008@gmail.com">
          <button className="headBtn">Написать на почту</button>
        </a>
      </div>
      <div draggable={false} className="links-box noselect">
        {links.map((e, i) => {
          return (
            <a
              target="_blank"
              id={`link_${i}`}
              href={e.link}
              key={e.name}
              rel="noreferrer"
            >
              <img
                draggable={false}
                className="link"
                src={e.img}
                alt={e.name}
              />
            </a>
          );
        })}
      </div>
    </header>
  );
};

export { Header };
