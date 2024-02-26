import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.jpeg";
// import user_5 from "../../assets/user-5.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Tausif Ahmad</h3>
                  <span>Edusity,India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I have made. The supportive community, state-of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expactations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Tausif Ahmad</h3>
                  <span>Edusity,India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I have made. The supportive community, state-of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expactations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Tausif Ahmad</h3>
                  <span>Edusity,India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I have made. The supportive community, state-of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expactations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Tausif Ahmad</h3>
                  <span>Edusity,India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I have made. The supportive community, state-of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expactations
              </p>
            </div>
          </li>
          {/* <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="" />
                <div>
                  <h3>Tausif Ahmad</h3>
                  <span>Edusity,India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I have made. The supportive community, state-of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expactations
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
