import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Passions from './components/Passions';
import Navigation from './components/Navigation';

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
        <div className="name">Brian Long</div>
      </div>
      <Navigation />
      <div className="content">
        <About />
        <Projects />
        <Leadership />
        <Skills />
        <Passions />
      </div>
    </div>
  );
}

export default App;
