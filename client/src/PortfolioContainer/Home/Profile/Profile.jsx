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
                        <a href="https://www.linkedin.com/in/layafakher" className="">
                            <i className="fa fa-linkedin" />
                        </a>
                        <a href="https://github.com/layafakher/" className="">
                            <i className="fa fa-github" />
                        </a>
                        <a href="https://join.skype.com/invite/cLKGMCtCPv4d" className="">
                            <i className="fa fa-skype" />
                        </a>
                        <a href="https://www.instagram.com/laya_bluece?utm_source=qr&r=nametag" className="">
                            <i className="fa fa-instagram"/>
                        </a>
                        {/*<a href="#" className="">*/}
                        {/*    <i className="fa fa-twitter"/>*/}
                        {/*</a>   */}
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
                            {/*Data Scientist 🎓 | Developer*/}
                            <TypeAnimation
                            repeat={Infinity}
                            sequence={[
                                "Data Scientist 🎓",
                                1000,
                                "Natural Language Processing Engineer 🎓",
                                1000,
                                "Front End Developer 💻",
                                1000,
                                "Hard-Working Teacher 🎓",
                                1000,
                                "React/React JS Dev 🌐",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                        Hello and Welcome to my webpage. Here you can find information about me.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn" onClick={()=>ScrollService.scrollHandler.scrollHireMeScreen()}>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="layafakher.pdf" download="layafakher.pdf">
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
