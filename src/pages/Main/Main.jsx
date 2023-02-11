import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { PageTitle } from '../../components/PageTitle';

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
        <Transition unmountOnExit mountOnEnter in={props.start} timeout={2000}>
          {(state) => {
            return (
              <PageTitle className={`mainPage ${state}`}>
                Последние работы
              </PageTitle>
            );
          }}
        </Transition>
        <Transition unmountOnExit mountOnEnter in={props.start} timeout={2000}>
          {(state) => (
            <div className={`swiper-box ${state}`}>
              <Swipe setPopUpType={setPopUpType} setPopUp={setPopUp} />
            </div>
          )}
        </Transition>

        <Transition unmountOnExit mountOnEnter in={props.start} timeout={1500}>
          {(state) => (
            <div className={`btnsBox ${state}`}>
              <NavLink to="./about">
                <button className={'btn'}>Обо мне</button>
              </NavLink>
              <NavLink to="./portfolio">
                <button className={'btn'}>Посмотреть больше работ</button>
              </NavLink>
            </div>
          )}
        </Transition>
      </main>
    </>
  );
};

export { Main };
