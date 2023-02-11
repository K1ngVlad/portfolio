import { useRef, useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Main } from './pages/Main';
import { Portfolio } from './pages/Portfolio';

import './App.css';

import startSound from './sound/start.mp3';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './pages/About/About';

const startAudio = new Audio(startSound);
startAudio.currentTime = 0.3;

const App = () => {
  console.log(window.location.pathname);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  const routes = [
    { path: '/', Component: Main },
    { path: '/portfolio', Component: Portfolio },
    { path: '/about', Component: About },
  ];

  const onMouseHeandler = (e) => {
    if (start || window.location.pathname !== '/') return;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const x = e.clientX;
    const y = e.clientY;
    ref.current.style.transform = `translate(${(width - x) / 50}px , ${
      (height - y) / 50
    }px)`;
  };

  const startHeandler = () => {
    if (start || window.location.pathname !== '/') return;
    startAudio.play();
    setStart(true);
  };

  return (
    <div
      className="app"
      onMouseMove={(e) => {
        onMouseHeandler(e);
      }}
      onClick={startHeandler}
    >
      <BrowserRouter>
        <Transition
          in={start || window.location.pathname !== '/'}
          timeout={2000}
        >
          {(state) => (
            <h2 ref={ref} className={`start-text ${state}`}>
              Добрый день! <br /> <span>нажмите в любом месте экрана</span>
            </h2>
          )}
        </Transition>
        <Transition
          in={start || window.location.pathname !== '/'}
          timeout={3500}
        >
          {(state) => <Header className={state} />}
        </Transition>
        {/* <Main start={start} /> */}
        {routes.map(({ path, Component }) => {
          return (
            <Route key={path} exact path={path}>
              {({ match }) => {
                return (
                  <CSSTransition
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                    in={match != null}
                  >
                    <Component start={start} setStart={setStart} />
                  </CSSTransition>
                );
              }}
            </Route>
          );
        })}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
