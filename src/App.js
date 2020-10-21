import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Passions from './components/Passions';
import Navigation from './components/Navigation';
import BottomBar from './components/BottomBar';
import Name from './resources/BL_name.png'
import './App.css';

function App() {

  /* scroll event handler */
  let last;
  let ticking = false;
  window.addEventListener('scroll', function(e) {
    last = window.scrollY;

    if(!ticking){
      window.requestAnimationFrame(function(){
        scroll();
        ticking = false;
      });

      ticking = true;
    }
  });

  function scroll() {
    let header = document.getElementById("header-image");
    let offset = "-" + last/3 + "px";
    header.style.backgroundPositionY = offset;
  }
  /* end scroll event handler */

  return (
    <div id="App" > {/*onScroll={() => scroll()}*/}
      <div id="header-image">
        <div className="logo-name">
          <img src={Name} height="440px" />
        </div>
      </div>
      <Navigation />
      <div className="content">
        <About />
        <Projects />
        <Leadership />
        <Skills />
        <Passions />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
