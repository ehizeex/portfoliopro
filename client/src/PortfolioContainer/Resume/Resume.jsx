import React, {useState} from 'react' 
import './Resume.css';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
export default function Resume(props) {
  const [selectedBulletIndex,setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});
  let fadeInScreenHandler = (screen)=>{
    if(screen.fadeInScreen !== props.id)
    return;
    Animations.animations.fadeInScreen(props.id);
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  function ResumeHeading(props) {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
                {props.heading ? props.heading : ""}
            </span>
            {(props.fromDate && props.toDate) ? (<div className='heading-date'>{props.fromDate +"_"+props.toDate}</div>): (<div></div>)
            }
        </div>
        <div className='resume-sub-heading'>
            <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
            <span>{props.description ? props.description : ''}</span>
        </div>
    </div>
    );
  };
  const resumeBullets = [
    {
        label: 'Education',
        logoSrc:'education.svg',
    }
    ,
    {
        label: 'Work History',
        logoSrc:'work-history.svg',
    }
    ,
    {
        label:'Programming Skills',
        logoSrc:'programming-skills.svg',
    }
    ,
    {
        label: 'Projects',
        logoSrc:'projects.svg'
    }
    ,
    {
        label: 'Interests',
        logoSrc:'interests.svg'
    }

  ];
  const programmingSkillsDetails = [
      {skill:'Python', ratingPercentage:80},
      {skill:'Java', ratingPercentage:85},
      {skill:'C/C++', ratingPercentage:70},
      {skill:'C#', ratingPercentage:70},
      {skill:'MATLAB', ratingPercentage:60},
    {skill:'JavaScript', ratingPercentage:85},
    {skill:'React JS', ratingPercentage:80},
    {skill:'React Native', ratingPercentage:85},
    {skill:'Express JS', ratingPercentage:89},
    {skill:'SQL Server', ratingPercentage:85},
    {skill:'HTML/CSS', ratingPercentage:78},

  ];

  const projectsDetails = [
    {
        title:'Bitcoin Price Prediction',
        duration: { fromDate: "June 2023", toDate: "September 2023" },
        description:"Bitcoin Price Prediction using News Sentiment Analysis.",
        subHeading: "Technologies Used: LSTM, Textblob,VADER , Deep Learning, Python",

    },
    {
        title: "Pitch Detection",
        duration: { fromDate: "February 2023", toDate: "March 2023" },
        description:
          "Detecting and plotting pitch contour of a given audio file using AMDF, Autocorrelation and Cepstrum methods",
        subHeading:
          "Technologies Used:  MATLAB, AMDF, CEPSTRUM, AUTOCORRELATION",
    },
    {
      title: "Ngram ",
      duration: { fromDate: "April 2023", toDate: "May 2023" },
      description:
        "Creating a random string of words of the corpus, whose length is less than 5 words,\n" +
          "and then calculating the probability of occurrence of this string of words assuming the current mini corpus and Bigram approximation.",
      subHeading:
        "Technologies Used: Python",
    },
  ]
  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading heading={"K. N. Toosi University Of Technology, Iran"}
                subHeading={"BACHELOR OF Computer Engineering"}
                description={" Cumulative GPA : 17.68/20.0 - Last 60 Credits GPA : 18.8/20.0"}
                fromDate={"2019"}
                toDate={"2023"}
        />
      {/*<ResumeHeading*/}
      {/*  heading={"National Youth Service Corps"}*/}
      {/*  subHeading={"Ministry Of Science And Technogy. Uyo Akwa Ibom State"}*/}
      {/*  fromDate={"2019"}*/}
      {/*  toDate={"2020"}*/}
      {/*/>*/}
      <ResumeHeading
        heading={"High school diploma in mathematics and physics"}
        subHeading={"Shahid Bahonar Leading High School"}
        description={"Cumulative GPA: 19.43/20"}
        fromDate={"2018"}
        toDate={"2019"}
      />
    </div>,
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'> 
        <ResumeHeading heading={"Natural Language Processing Engineer, Data Scientist"} subHeading={"Full Time, Smartory Labs"}  fromDate={'2023'} toDate={'Present'}/>

          <div className='experience-description'>
          <span className='resume-description-text'>
             - Working on the resume parsing and resume ranking project.
          </span>
          </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
             {/*- Developing Web Applications.*/}
          </span>
        </div>
        <div className='experience-description'>
          {/*<span className='resume-description-text'>*/}
          {/*     - Working with various frameworks such as React JS.*/}
          {/*</span>*/}

          {/*<span className="resume-description-text">*/}
          {/*    - Android Programming in Android Studio.*/}
          {/*</span>*/}
        </div>
      </div>
    </div>,
      <div className='resume-screen-container programming-skills-container' key='programming-skills'>
        {programmingSkillsDetails.map((skill,index)=>(
          <div className='skill-parent' key={index}>
            <div className='heading-bullet'></div>
            <span>
              {skill.skill}
            </span>
            <div className='skill-percentage'>
              <div style={{width: skill.ratingPercentage +"%"}} className='active-percentage-bar'>
              </div>
            </div>
          </div>
          ))
        }
      </div>,
      <div className='resume-screen-container' key='projects'>
        {projectsDetails.map((projectDetail, index)=>(
          <ResumeHeading key={index} heading={projectDetail.title} subHeading={projectDetail.subHeading} 
            description={projectDetail.description}
            fromDate={projectDetail.duration.fromDate}
            toDate={projectDetail.duration.toDate}
          />
        ))}
      </div>,
      <div className='resume-screen-container' key='interests'>
        <ResumeHeading heading={"Machine Learning and Deep Learning"} description={'LSTM, GRU, SVM, Decision Tree'}/>
        <ResumeHeading heading={"Natural Language Processing"} description={'Text Sentiment Analysis'}/>
        <ResumeHeading heading={"Speech Processing"} description={'pitch detection and Speech Recognition'}/>
        <ResumeHeading heading={"Graphs "} description={'Community Detection, Social Graphs, most influential nodes in social networks'}/>
          <ResumeHeading heading={"Computer Vision"} description={'Object Detection'}/>

      </div>
     
  ];

  function handleCarousal(index){
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: {transform:"translateY("+ index * offsetHeight * -1+"px)"},

    };
    setCarouselOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  function getBullets(){
    return resumeBullets.map((bullet, index)=>(
      <div onClick={()=>handleCarousal(index)}
      className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
      key={index}
      >
        <img className='bullet-logo' src={`${bullet.logoSrc}`}  alt='no interenet connection'/>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  function getResumeScreens(){
    return (
      <div className='resume-details-carousal' style={carouselOffSetStyle.style} >
        {resumeDetails.map((resumeDetail)=> resumeDetail)}        
      </div>
    )
  }

  return (
    <div className='resume-container screen-container fade-in' id={props.id || ""}>
        <div className='resume-content'>
          <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
          <div className='resume-card'>
            <div className='resume-bullets'>
              <div className='bullet-container'>
                <div className='bullet-icons'></div>
                <div className='bullets'>{getBullets()}</div>
              </div>
            </div>
            <div className='resume-bullet-details'>
              {getResumeScreens()}
            </div>
          </div>
        </div>
    </div>
  );
};
