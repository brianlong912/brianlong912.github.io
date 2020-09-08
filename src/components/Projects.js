import React from 'react';

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <ul>
        <li>
          <h3>Food2Recipe</h3>
          <ul>
            <li>Mobile workout app to track weightlifting routines and view other user’s routines</li>
            <li>Team project using the Scrum framework to emulate the workforce environment</li>
            <li>Written in React Native with a Node.js server and a MongoDB backend</li>
          </ul>
        </li>
        <li>
          <h3>Fithub</h3>
          <ul>
            <li>Recipe search web app designed to find recipes for the food already found around the house</li>
            <li>Team project using the Scrum framework to emulate the workforce environment</li>
            <li>Written in React with Firebase hosting and database</li>
          </ul>
        </li>
        <li>
          <h3>Custom Shell</h3>
          <ul>
            <li>Command line interpreter for Linux</li>
            <li>Written in C++</li>
          </ul>
        </li>
      </ul>

    </div>
  )
}
export default Projects;