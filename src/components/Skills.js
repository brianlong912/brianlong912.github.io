import React from 'react';
import Languages from './Languages';
import './Skills.css';

function Skills() {

  const languages = [
    { language: "C", percent: "90%" },
    { language: "C++", percent: "90%" },
    { language: "HTML/CSS", percent: "85%" },
    { language: "JavaScript", percent: "80%" },
    { language: "Java", percent: "75%" },
    { language: "Python", percent: "30%" },
    { language: "MatLab", percent: "30%" }
  ]

  return (
    <div id="skills" className="skills">
      <div className="section-title">Skills</div>
      <div className="skills-content">
        <div className="languages">
          <div className="skills-title">Languages</div>
          <Languages languages={languages} />
          {/* <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>React</li>
          </ul> */}
        </div>
        <div id="coursework">
          <div className="skills-title">Coursework</div>
          <div id="courses-list">
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Computer Architecture</li>
              <li>Systems Programming</li>
              <li>Operating Systems</li>
              <li>Information Systems</li>
              <li>Network Systems</li>
              <li>Software Engineering</li>
              <li>Computational Physics</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Skills;