import { useRef, useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { Header } from './components/Header';

import startSound from './sound/start.mp3';

import './App.css';
import { Swipe } from './components/Swipe';
import { Footer } from './components/Footer/Footer';
import { PopUp } from './components/PopUp';

const startAudio = new Audio(startSound);
startAudio.currentTime = 0.3;

const App = () => {
  const [start, setStart] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState(null);
  const ref = useRef(null);

  const onMouseHeandler = (e) => {
    if (!start) return;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const x = e.clientX;
    const y = e.clientY;
    ref.current.style.transform = `translate(${(width - x) / 50}px , ${
      (height - y) / 50
    }px)`;
  };

  const startHeandler = () => {
    if (!start) return;
    startAudio.play();
    setStart(false);
  };

  return (
    <div
      className="app"
      onMouseMove={(e) => {
        onMouseHeandler(e);
      }}
      onClick={startHeandler}
    >
      <Transition in={start} timeout={500}>
        {(state) => (
          <h2 ref={ref} className={`start-text ${state}`}>
            Добрый день! <br /> <span>нажмите в любом месте экрана</span>
          </h2>
        )}
      </Transition>

      <Transition in={start} timeout={300}>
        {(state) => <Header className={state} />}
      </Transition>

      <Transition in={start} timeout={300}>
        {(state) => (
          <div className={`swiper-box ${state}`}>
            <Swipe setPopUpType={setPopUpType} setPopUp={setPopUp} />
          </div>
        )}
      </Transition>
      <Footer />
      <Transition unmountOnExit mountOnEnter in={popUp} timeout={500}>
        {(state) => (
          <PopUp setPopUp={setPopUp} id={popUpType} className={state} />
        )}
      </Transition>
    </div>
  );
};

export default App;
