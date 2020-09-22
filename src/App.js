import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Passions from './components/Passions';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <div className="header-image">
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
