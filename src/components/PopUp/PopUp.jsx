import './style.css';
import { portfolio } from '../../data/portfolio';

import git from '../../assets/svg/github.svg';

const PopUp = (props) => {
  const onClickHeandler = (e) => {
    if (
      e.target.classList.contains('PopUp') ||
      e.target.classList.contains('popUpClose')
    ) {
      props.setPopUp(null);
    }
  };

  const api = portfolio.find((e) => e.id === props.id);

  return (
    <div
      onClick={(e) => {
        onClickHeandler(e);
      }}
      className={`PopUp ${props.className}`}
    >
      <div className="popUpBox">
        <button className="popUpClose">╳</button>
        <img className="popUpImg" alt={api.name} src={api.img} />
        <div className="infoBox">
          <h2 className="popUpTitle">{api.name}</h2>
          <div className="popUpLinks">
            <a href={api.url} target="_blank" rel="noreferrer">
              <button className="popUpBtn">Открыть</button>
            </a>
            <a
              draggable={false}
              className="noselect"
              href={api.gitHub}
              target="_blank"
              rel="noreferrer"
            >
              <button className="gitBtn noselect">
                <img alt="gitHub" draggable={false} src={git} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PopUp };
