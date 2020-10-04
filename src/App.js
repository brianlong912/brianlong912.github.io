import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Passions from './components/Passions';
import Navigation from './components/Navigation';

function App() {
  window.addEventListener("scroll", scroll());
  function scroll() {
    var header = document.getElementById("header-image");
    // header.style.backgroundPosition = "0 -30px";
    console.log(window.pageYOffset);
  }
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
