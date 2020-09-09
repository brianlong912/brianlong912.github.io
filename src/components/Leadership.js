import React from 'react';
import BGRcircle from '../resources/BGRcircle.JPEG';
import BGRbeacons from '../resources/BGRbeacons.JPG';
import BGRstairs from '../resources/BGRstairs.JPG';
import pdtHouse from '../resources/pdtHouse.JPG';
import pdtSpaceDay from '../resources/pdtSpaceDay.JPG';
import pdtLogo from '../resources/pdtLogo.jpg';
import './Leadership.css';

function Leadership() {
  return (
    <div id="leadership" >
      <div className="leadership">
        <h1>Leadership Experience</h1>
        <div className="leadership-item">
          <div className="leadership-info">
            <h3>Boiler Gold Rush Orientation</h3>
            <ul>
              <li>Assisted incoming students adjusting to campus during a week long orientation program</li>
              <li>Mentored 11 Team Leaders trough trainings to prepare them for the week of orientation</li>
            </ul>
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
            <div style={{ width: "65%", height: "100%" }}>
              <img src={pdtLogo} alt="pdtLogo" width="100%" height="50%" style={{ objectFit: "cover", display: "block" }} />
              <img src={pdtHouse} alt="pdtHouse" width="100%" height="50%" style={{ objectFit: "cover" }} />
            </div>
            <img src={pdtSpaceDay} alt="pdtSpaceDay" width="35%" height="100%" style={{ objectFit: "cover" }} />
          </div>
          <div className="leadership-info">
            <h3>Phi Delta Theta</h3>
            <ul>
              <li>Organized a fundraiser event for the Hypertrophic Cardiomyopathy Association and provided fraternal
              members with community service opportunities</li>
              <li>Educated and enforced risk management policies</li>
            </ul>
          </div>
        </div>
        <div className="leadership-item">
          <h3>Triahtlon Club</h3>
          <ul>
            <li>Served as a member of the executive board to help make logistical decisions for the club</li>
            <li> Wrote swim workouts and led practices three times a week to improve members’ swimming skills</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Leadership;