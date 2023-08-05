import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-heading-description linked">
          <span>
            <a href={props.links ? props.links : ""}>
              {props.LinkTitle ? props.LinkTitle : ""}
            </a>
            </span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS */
  const resumeBullets = [
    { label: "Education", logoSrc: "https://cdn-icons-png.flaticon.com/512/182/182942.png" },
    { label: "Work History", logoSrc: "https://icons.iconarchive.com/icons/dtafalonso/android-l/512/Settings-L-icon.png" },
    { label: "Programming Skills", logoSrc: "https://cdn.iconscout.com/icon/free/png-256/free-code-280-460136.png?f=webp" },
    { label: "Projects", logoSrc: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png" },
    { label: "Achievements", logoSrc: "https://cdn-icons-png.flaticon.com/512/1378/1378582.png " },
    { label: "Interests", logoSrc: "https://png.pngtree.com/element_our/sm/20180517/sm_5afd3ecdc09db.jpg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C/C++", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Embedded JavaScript", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Machine Learning", ratingPercentage: 20 },
    { skill: "HTML/CSS", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Aug 2023", toDate: "Sept 2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Green Delight - Get Organic Product at your Doorstep",
      duration: { fromDate: "Mar 2023", toDate: "April 2023" },
      description:
        "An ecommerce application designed to sell organic products online directly from Farmer to Customer",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js.",
    },
    {
      title: "Olympic Fit",
      duration: { fromDate: "July 2023", toDate: "Aug 2023" },
      description:
        "Implemented ML based Random Forest Classifier and Logistic Regression to predict health status of athletes.",
      subHeading:
        "Technologies Used: HTML, CSS, JavaScript, Bootstrap, Machine Learning, Flask.",
    },
  ];

  const resumeDetails = [
    // education
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"National Institute of Technology (NIT) Jamshedpur"}
        subHeading={"BACHELOR OF TECHNOLOGY IN Computer Science and Engineering"}
        fromDate={"2021"}
        toDate={"2025"}
      />

      <ResumeHeading
        heading={"Kendriya Vidyalaya Namkum, Jharkhand"}
        subHeading={"Class XII"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Kendriya Vidyalaya"}
        subHeading={"High School"}
        fromDate={"2012"}
        toDate={"2019"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading="Web Team NIT Jamshedpur"
          subHeading="I am an active member of club"
          fromDate={"Feb 2023"}
          toDate={"Present"}
        />
        </div>
        <div className="experience-container">
        <ResumeHeading
          heading="PCON- Programming Club NIT Jamshedpur"
          subHeading="Conducted sessions on HTML/CSS"
          fromDate={"March 2023"}
          toDate={"Present"}
        />
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Achievements */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Regionalist of Solving for India Hackathon organised by GFG powered by Goolge Cloud and AMD"
        LinkTitle="View Certificate"
        links="https://drive.google.com/file/d/1XCgYRg81tVi-nc1xkgKpizGVEoXQieCb/view"
      />
      <ResumeHeading
        heading="Got rank 37 in Codechef's starter 67C."
      />
      <ResumeHeading
        heading="Got rank 85 in Codathon by NIT Bhopal"
        LinkTitle="View Certificate"
        links="https://drive.google.com/file/d/1ZEUCLQTSAkg6lu4393H5AvbEudpgjKqH/view"
      />
      <ResumeHeading
        heading="Stood rank 1908 in Google CODEJAM Round A."
        LinkTitle="View Certificate"
        links="https://drive.google.com/file/d/1k8QnCTAah9aqlVY7X1536FsH2-W-GSpy/view"
      />
      <ResumeHeading
        heading="Stood rank 15 March CodeKarma held by PCON, NIT Jamshedpur"
      />
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Badminton"
        description="I am an avid Badminton player and a proud member of my college's Official Badminton Club, dedicated to honing my skills on the court."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Mythology"
        description="Indian mythology captivates me with its rich tapestry of gods, goddesses, and epic tales that continue to inspire and fascinate."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          // src={require(`../../assets/Resume/` + bullet.logoSrc).default}
          src= {bullet.logoSrc}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
