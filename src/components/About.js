import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <div className="about-title">About Me</div>
        <div className="about-info">
          Personable and diligent, I am seeking a position to blend my passion for physics with my love for computer science.
          While these fields approach problem-solving in different ways, I am able to use my experience from
          both fields to find solutions from a unique perspective. A busy college schedule fostered my strong
          time management skills while enriching me with valuable leadership experiences. Adding in my love for
          triathlons and I have the determination to exhaust all possibilities.
        </div>
        <div className="education">
          <div className="education-title">Education</div>
          <div className="education-content">
            <span style={{ fontWeight: "bold" }}>Purdue University, 2016-2020</span> <br />
            Bachelor of Science <br />
            Computer Science, Physics
          </div>
        </div>
      </div>

      {/* <hr /> */}
      {/* <p>
        Personable and diligent, I am seeking a position to blend my passion for physics with my love for computer science.
        While these fields approach problem-solving in different ways, I am able to use my experience from
        both fields to find solutions from a unique perspective. A busy college schedule fostered my strong
        time management skills while enriching me with valuable leadership experiences. Adding in my love for
        triathlons and I have the determination to exhaust all possibilities.
      </p> */}

    </div>
  )
}
export default About;