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
    {skill:'JavaScript', ratingPercentage:85},
    {skill:'React JS', ratingPercentage:80},
    {skill:'React Native', ratingPercentage:85},
    {skill:'Express JS', ratingPercentage:89},
    {skill:'Node JS', ratingPercentage:70},
    {skill:'Mongo DB', ratingPercentage:85},
    {skill:'Java', ratingPercentage:85},
    {skill:'HTML', ratingPercentage:78},
    {skill:'CSS', ratingPercentage:70},
  ];

  const projectsDetails = [
    {
        title:'Personal Portfolio Websit',
        duration: {fromDate:"2022", toDate:"2023"},
        description:"A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap",

    },
    {
        title: "Android Music Player ",
        duration: { fromDate: "2020", toDate: "2021" },
        description:
          "An ecommerce application designed to sell products online wth payment system integration",
        subHeading:
          "Technologies Used:  Java, Android Studio, UI Desing",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ]
  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading heading={"KNTU Universito Of technology, Iran"}
                subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
                fromDate={"2019"}
                toDate={"2023"}
        />
      <ResumeHeading
        heading={"National Youth Service Corps"}
        subHeading={"Ministry Of Science And Technogy. Uyo Akwa Ibom State"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Command Secondary School Mbiri"}
        fromDate={"2007"}
        toDate={"2012"}
      />
    </div>,
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'> 
        <ResumeHeading heading={"MCP"} subHeading={"FULL STACK DEVELOPER"}  fromDate={'2024'} toDate={'2025'}/>
        <div className='experience-description'>
          <span className='resume-description-text'>
              Currently working as MERN stack web and mobile developer and also an
              online instructor on udemy.
          </span>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
          - Developed an ecommerce website for client with the dashboard for
              managing the products, managing reviews, users, payment etc. .
          </span>
          <br/>
          <span className='resume-description-text'>
          - Integrated the web app with backend services to create new user
              onboarding application with dynamic form content.{" "}
          </span>
          <br/>
          <span className="resume-description-text">
              - I stretch my mental capacity to develope UI as per the given
              designs.
          </span>
          <br/>
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
        <ResumeHeading heading={"Teaching"} description={'Apart from being a tech'}/>
        <ResumeHeading heading={"Music"} description={'Apart from being a tech'}/>
        <ResumeHeading heading={"Competetive Gaming"} description={'Apart from being a tech'}/>
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
