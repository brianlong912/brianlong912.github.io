import React from 'react';
import BGRcircle from '../resources/FBSJ6301.JPEG';
import './Leadership.css';

function Leadership() {
  return (
    <div id="leadership">
      <h1>Leadership Experience</h1>
      <ul>
        <div className="leadership-item">
          <div className="leadership-info">
            <h3>Boiler Gold Rush Orientation</h3>
            <ul>
              <li>Assisted incoming students adjusting to campus during a week long orientation program</li>
              <li>Mentored 11 Team Leaders trough trainings to prepare them for the week of orientation</li>
            </ul>
          </div>
          <div className="leadership-pics">
            <img src={BGRcircle} alt="BGRcircle"/>
          </div>
        </div>
        <div className="leadership-item">
          <h3>Triahtlon Club</h3>
          <ul>
            <li>Served as a member of the executive board to help make logistical decisions for the club</li>
            <li> Wrote swim workouts and led practices three times a week to improve members’ swimming skills</li>
          </ul>
        </div>
        <div className="leadership-item">
          <h3>Phi Delta Theta</h3>
          <ul>
            <li>Organized a fundraiser event for the Hypertrophic Cardiomyopathy Association and provided fraternal
              members with community service opportunities</li>
            <li>Educated and enforced risk management policies</li>
          </ul>
        </div>

      </ul>
    </div>
  )
}
export default Leadership;