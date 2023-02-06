import './style.css';
import { portfolio } from '../../api/portfolio';

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
          <a href={api.url}>
            <button className="popUpBtn">Открыть</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { PopUp };
