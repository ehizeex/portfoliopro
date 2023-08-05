import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.linkedin.com/in/divya-rani-95a55522b/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="mailto:ranidivya5408@gmail.com">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/divya.rani.08/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://github.com/divy08r">
                <i className="fa fa-github-square" />
              </a>
              <a href="https://twitter.com/">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Divya Rani</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Data Structures😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Competitive Programming📱",
                    1000,
                    "React/React Native 🌐",
                    1000,
                    "Git/GitHub 📈",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations. <br /> And a Coding Enthusiast
            </span>
          </div>

          <div className="profile-options">
              <a href="#ContactMe">
                <button className="btn primary-btn"> Hire Me </button>
              </a>
            <a href="Divya_Rani_Resume.pdf" download="Divya_Rani_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
