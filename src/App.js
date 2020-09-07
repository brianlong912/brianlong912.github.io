import React from 'react';
import './App.css';
import headerImage from './resources/Grad_arch_bike_cropped.jpeg';
import About from './components/About';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Passions from './components/Passions';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <img width="100%" src={headerImage} alt="Hi I'm Brian Long" />
      <Navigation />
      <About />
      <Projects />
      <Leadership />
      <Skills />
      <Passions />
    </div>
  );
}

export default App;
