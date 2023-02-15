import React from 'react'
// import Typical from 'react-typical'
import { TypeAnimation } from 'react-type-animation'
import './Profile.css';
import ScrollService from '../../../Utilities/ScrollService';
export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="#" className="">
                            <i className="fa fa-facebook-square" />
                        </a>
                        <a href="#" className="">
                            <i className="fa fa-google-plus-square"/>
                        </a>
                        <a href="#" className="">
                            <i className="fa fa-instagram"/>
                        </a>
                        <a href="#" className="">
                            <i className="fa fa-twitter"/>
                        </a>   
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Laya</span> 
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            <TypeAnimation 
                            repeat={Infinity}
                            sequence={[
                                "Ethutiastic Dev  😎",
                                1000,
                                "Full Stack Developer 💻",
                                1000,
                                "Mern Stack Dev 📱",
                                1000, 
                                "React/React Native Dev 🌐",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                        Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn" onClick={()=>ScrollService.scrollHandler.scrollHireMeScreen()}>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="Resume.pdf" download="Ehiedu ehizcv.pdf">
                        <button className="btn highlighted-btn">
                            Get Resume
                        </button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>
    </div>
  );
}
