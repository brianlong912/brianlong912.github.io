import React from 'react';

function Navigation() {
  return (
    <div id="navigation">
      {/* <div className="header" /> */}
      <div className="navigation-content">
        <a className="nav" href="#about">About Me</a>
        <div>|</div>
        <a className="nav" href="#projects">Projects</a>
        <div>|</div>
        <a className="nav" href="#leadership">Leadership</a>
        <div>|</div>
        <a className="nav" href="#skills">Skills</a>
        <div>|</div>
        <a className="nav" href="#passions">Passions</a>
      </div>
    </div>
  )
}
export default Navigation;