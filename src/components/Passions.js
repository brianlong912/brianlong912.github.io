import React from 'react';
import Nats from '../resources/Nats_finish.JPG';
import IM70 from '../resources/IM.JPG';
import TriFit from '../resources/TriFit.JPG';
import VASnap from '../resources/VA_snap.PNG';
import Climbing from '../resources/climbing.gif';
import './Passions.css';

function Passions() {
  return (
    <div id="passions">
      <div className="section-title">Passions</div>
      <div className="passions-item">
        <div className="passion-info-container">
          <div className="passion-info">
            <h3 >Ironman</h3>
            <div>
              In my endeavors with triathlons, I have accomplished becoming
              an Ironman 70.3 finisher. The race was long and grueling but after
              6 hours of non-stop exercise, I was able to cross the finish line.
              The next goal is to continue training and eventually complete a full Ironman.
            </div>
          </div>
        </div>
        <div className="passion-pics">
          <img src={Nats} alt="Nats" width="40%" height="100%" />
          <div style={{ width: "60%", height: "100%" }}>
            <img src={TriFit} alt="TriFit" width="100%" height="50%" style={{ display: "block", objectPosition: "0 -20px" }} />
            <img src={IM70} alt="IM70.3" width="100%" height="50%" />
          </div>
        </div>
      </div>
      <div className="passions-item">
        <div className="passion-pics">
          <img src={Climbing} alt="Outdoor climbing wall" width="50%" height="100%" />
          <img src={VASnap} alt="Vertical Adventures Promo" width="50%" height="100%" />
        </div>
        <div className="passion-info-container">
          <div className="passion-info">
            <h3 >Bouldering</h3>
            <div>
              My newest hobby is bouldering. I started climbing with a few friends and
              quickly fell in love. Bouldering offers a unique test of both mental and
              physical strength. Each route requires specific moves and body positions,
              and so becomes almost like a puzzle. Unlike many other sports, there is a
              test of intelligence that makes bouldering such a unique challenge.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Passions;