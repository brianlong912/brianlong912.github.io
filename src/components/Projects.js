import React from 'react';
import GitHubLogo from '../resources/GitHub_Logo.png';
import F2RLogo from '../resources/Food2RecipeLogo.png';
import './Projects.css';

function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">Projects</div>
      <div className="projects-item">
        <img src={F2RLogo} alt="Food2RecipeLogo" height="130px" />
        <div className="projects-content">
          <div className="projects-item-title">
            <h3>Food2Recipe</h3>
            <a className="projects-link" href="https://github.com/lee2877/FoodToRecipe">
              <img src={GitHubLogo} alt="GitHubLogo" height="25px" />
            </a>
          </div>
          <div className="projects-info">
            As a college student living on their own for the first time, I found myself making the same
            meals for dinner every week. I didn't have the repertoire of recipes one builds up over the
            years, and I was unsure what recipes to search. This problem fostered the solution that became
            Food2Recipe. Instead of searching for a specific type of recipe, a list of ingredients is
            used to find recipes. With this, I can find recipes using my favorite foods or stretch the
            few ingredients I have lying around my kitchen into actual meals. <br /><br />

            This idea was made a reality in my software engineering senior design class. Using the Scrum
            methodology practices, three of us worked together to create a web app that served these
            functions. Building the frontend in React and using Google's Firebase database and hosting
            services allowed us to work in environments with which we had previous experience.<br /><br />

            Working in groups such as this has taught me a lot about how to build a project with others.
            In a group, not all ideas will be accepted by the other members of the group. There is value 
            in learning to compromise by listening to the ideas of others while trying to incorporate your 
            own. This means that proper communication can be the deciding factor if a group does well in the 
            end. This project in particular was made more difficult by the
            Covid-19 pandemic. Difficulties in communication arose as we had to learn to meet virtually.
            In all, I am proud of the product we were able to create withjust three people and a semester in 
            spite of the struggles we experienced.
          </div>
        </div>
      </div>
      {/* <ul>
            <li>Mobile workout app to track weightlifting routines and view other user’s routines</li>
            <li>Team project using the Scrum framework to emulate the workforce environment</li>
            <li>Written in React Native with a Node.js server and a MongoDB backend</li>
          </ul> */}
      <div className="projects-item">
        <div className="fit">Fit<span className="hub">Hub</span></div>
        <div className="projects-content">
          <div className="projects-item-title">
            <h3>FitHub</h3>
            <a className="projects-link" href="https://github.com/hubermjonathan/fithub">
              <img src={GitHubLogo} alt="GitHubLogo" height="25px" />
            </a>
          </div>
          <div className="projects-info">
            FitHub is a mobile workout app designed to help plan out your workout regiments while also
            connecting with others. It was developed by a group of six for our software engineering class.
            There are many workout apps available on the market, but many of them fail to encompass all of
            the features we sought to implement. While many are good at providing users with workouts from
            friends and professionals, they fall short in areas of planning future training. Other apps that
            are great for planning are very limited in their selection of workouts. <br /><br />
            As a group, we wanted to challenge ourselves and learn something new. We decided a mobile
            application would be best for what we were creating and thus chose to use React Native for our
            front end. On the backend we used a Node.js server and a MongoDB database.<br /><br />
            This project was my first experience working in a group on a large scale program. One of the great
            benefits of being in a group is being able to seek advice from the other group members. There were
            many times I found myself stuck on a problem and was able to lean on my group to help me solve the
            problem. Using the Scrum methods while learning about them in lectures helped solidify the
            principles I was learning.
          </div>
        </div>
      </div>
      {/* <ul>
        <li>Recipe search web app designed to find recipes for the food already found around the house</li>
        <li>Team project using the Scrum framework to emulate the workforce environment</li>
        <li>Written in React with Firebase hosting and database</li>
      </ul> */}
      {/* <h2>Side Projects</h2>
      <div id="prism-sketch" /> */}

    </div>
  )
}
export default Projects;