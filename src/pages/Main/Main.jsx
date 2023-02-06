import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { PopUp } from '../../components/PopUp';
import { Swipe } from '../../components/Swipe';

import './style.css';

const Main = (props) => {
  const [popUp, setPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState(null);
  return (
    <>
      <Transition unmountOnExit mountOnEnter in={popUp} timeout={500}>
        {(state) => (
          <PopUp setPopUp={setPopUp} id={popUpType} className={state} />
        )}
      </Transition>
      <main className="main page">
        <Transition in={props.start} timeout={2000}>
          {(state) => (
            <div className={`swiper-box ${state}`}>
              <Swipe setPopUpType={setPopUpType} setPopUp={setPopUp} />
            </div>
          )}
        </Transition>

        <Transition in={props.start} timeout={1500}>
          {(state) => (
            <NavLink className="linkMore" to="./portfolio">
              <button className={`seeMoreBtn ${state}`}>
                Посмотреть больше работ
              </button>
            </NavLink>
          )}
        </Transition>
      </main>
    </>
  );
};

export { Main };
