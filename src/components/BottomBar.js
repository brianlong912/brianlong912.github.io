import React from 'react';
import resume from '../resources/Brian Long Resume.pdf';
import github from '../resources/GitHub-Mark-Light-32px.png';
import linkedin from '../resources/In-White-34.png';

function BottomBar() {
  return (
    <div id="bottombar">
      <div className="bottom-container">
        <a href={resume} target="_blank" className="resume">Resume</a>
        <a href="https://github.com/brianlong912" target="_blank">
          <img src={github} alt="GitHub Logo" height="32px" />
        </a>
        <a href="https://www.linkedin.com/in/brian-long-50a346157/" target="_blank">
          <img src={linkedin} alt="LinkedIn Logo" height="32px" />
        </a>
        <a href="mailto: brianlong912@gmail.com" className="email">brianlong912@gmail.com</a>
      </div>
    </div>
  )
}
export default BottomBar;