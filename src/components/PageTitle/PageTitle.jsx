import { NavLink } from 'react-router-dom';
import './style.css';

const PageTitle = (props) => {
  return (
    <div className={`pageTitleBox ${props.className}`}>
      <NavLink className="titleBack" to="/">
        <button className="btn">На главную</button>
      </NavLink>
      <h1 className="pageTitle">{props.children}</h1>
    </div>
  );
};

export { PageTitle };
