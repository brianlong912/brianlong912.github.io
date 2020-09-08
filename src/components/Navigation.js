import React from 'react';

function Navigation() {
  return (
    <div className="navigation">
      <div className="header" />
      <div className="navigation-content">
        <a href="#about">About Me</a>
        <div>|</div>
        <a href="#projects">Projects</a>
        <div>|</div>
        <a href="#leadership">Leadership</a>
        <div>|</div>
        <a href="#skills">Skills</a>
        <div>|</div>
        <a href="#passions">Passions</a>
      </div>
    </div>
  )
}
export default Navigation;