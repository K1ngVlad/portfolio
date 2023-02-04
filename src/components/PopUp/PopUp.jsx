import './style.css';
import { portfolio } from '../../api/portfolio';

const PopUp = (props) => {
  const onClickHeandler = (e) => {
    if (e.target.classList.contains('PopUp')) {
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
        <img className="popUpImg" alt={api.name} src={api.img} />
        <div className="infoBox">
          <h2>{api.name}</h2>
          <a href={api.url}>
            <button>Посмотреть</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { PopUp };
