import React from 'react';
import BGRcircle from '../resources/BGRcircle.JPEG';
import BGRbeacons from '../resources/BGRbeacons.JPG';
import BGRstairs from '../resources/BGRstairs.JPG';
import pdtHouse from '../resources/pdtHouse.JPG';
import pdtSpaceDay from '../resources/pdtSpaceDay.JPG';
import pdtLogo from '../resources/pdtLogo.jpg';
import TriBoilerman from '../resources/Tri_Boilerman.JPG';
import TriGR from '../resources/Tri_GR.JPG';
import TriMuncie from '../resources/Tri_Muncie.JPG';
import './Leadership.css';

function Leadership() {
  return (
    <div id="leadership" className="leadership">
      <div className="leadership-title">Leadership Experience</div>
      <div className="leadership-item">
        <div className="leadership-info">
          <div className="leadership-content">
            <h3>Boiler Gold Rush (BGR)</h3>
            <div>
              BGR is a week long orientation program at Purdue designed to get new students acquainted with the campus.
              The student volunteers are broken down into a hierarchal system. The Team Leaders
              are the volunteers that interact directly with the new students. The Team Supervisors
              train the Team Leaders and help plan the activities. At the top, the Student
              Orientation Committee works with the Professional Staff of Purdue to plan the entire
              week and Train all of the volunteers. <br /><br />
              I was fortunate enough to be selected for the Team Supervisor position after my time as
              a Team Leader. The experience taught me a great deal about handling the responsibilities
              and time management of being a leader. As well, I learned how to listen and be a genuine
              mentor to those I was leading.
            </div>
          </div>
        </div>
        <div className="leadership-pics">
          <img src={BGRcircle} alt="BGRcircle" width="70%" height="100%" style={{ objectFit: "cover" }} />
          <div style={{ width: "30%", height: "100%" }}>
            <img src={BGRstairs} alt="BGRstairs" width="100%" height="50%" style={{ objectFit: "cover", display: "block" }} />
            <img src={BGRbeacons} alt="BGRbeacons" width="100%" height="50%" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <div className="leadership-item">
        <div className="leadership-pics">
          <div style={{ width: "60%", height: "100%" }}>
            <img src={pdtLogo} alt="pdtLogo" width="100%" height="50%" style={{ objectFit: "cover", display: "block" }} />
            <img src={pdtHouse} alt="pdtHouse" width="100%" height="50%" style={{ objectFit: "cover" }} />
          </div>
          <img src={pdtSpaceDay} alt="pdtSpaceDay" width="40%" height="100%" style={{ objectFit: "cover" }} />
        </div>
        <div className="leadership-info">
          <div className="leadership-content">
            <h3>Phi Delta Theta</h3>
            <div>
              At Phi Delta Theta, I was able to hold two officer positions. First, I held the minor position of Community
              Service/Philanthropy Chair. I motivated members of the chapter to participate in community
              service activities around campus and attend philanthropy events hosted by other Greek organizations. As well,
              I was in charge of planning our philanthropy event to raise money for a charity of our choice. In recent
              years, we had chosen to support the Hypertrophic Cardiomyopathy Association to honor one of our fallen
              brothers who had recently passed.<br /><br />
              After holding a minor position, I was able to run for the executive position of Risk Manager. The health
              and safety of my brothers were always important to me and I wanted to be able to do my best to look after
              them. In this role, I kept members informed of the risk policies of the national chapter but also attempted
              to go further and use on-campus resources to raise awareness of issues such as mental health.
            </div>
          </div>
          {/* <ul>
              <li>Organized a fundraiser event for the Hypertrophic Cardiomyopathy Association and provided fraternal
              members with community service opportunities</li>
              <li>Educated and enforced risk management policies</li>
            </ul> */}
        </div>
      </div>
      <div className="leadership-item">
        <div className="leadership-info">
          <div className="leadership-content">
            <h3>Triahtlon Club</h3>
            <div>
              After joining the Triathlon club at the start of my college career, I was able to win the election to become
              Swim captain in my sophomore year and hold the position until graduation. In the past, this role primarily wrote
              3 swim practices a week and showed up at the practices to get everyone started before hopping in and swimming
              themselves. <br /><br />
              With my competitive swimming background, I wanted to introduce more emphasis on technique alongside
              the endurance training. Each practice I wrote had 5 different levels for the varying skills of the members. As well,
              there were many practices where I stayed out of the water and helped correct the form of swimmers that needed it.
            </div>
          </div>
          {/* <ul>
              <li>Served as a member of the executive board to help make logistical decisions for the club</li>
              <li> Wrote swim workouts and led practices three times a week to improve members’ swimming skills</li>
            </ul> */}
        </div>
        <div className="leadership-pics">
          <img src={TriGR} alt="TriGR" width="45%" height="100%" style={{ objectFit: "cover" }} />
          <div style={{ width: "55%", height: "100%" }}>
            <img src={TriBoilerman} alt="TriBoilerman" width="100%" height="50%" style={{ objectFit: "cover", display: "block" }} />
            <img src={TriMuncie} alt="TriMuncie" width="100%" height="50%" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Leadership;