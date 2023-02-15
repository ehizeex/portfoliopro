import './AboutMe.css';
import React,{useEffect} from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations';
export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANTS = {
        description: 'Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.',
        highlights :{
            bullets: [
                "Full Stack web and mobile development",
                "Interactive Front End as per the design",
                "React and React Native",
                "Redux for State Mnanagement",
                "Building REST API",
                "Managing database",
              ],
              heading: "Here are a Few Highlights:",
        }
    }
    function renderHighlights() {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight ' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
        <div className="about-me-parent">
            <ScreenHeading title={'AboutMe'} subHeading={'Why Choose Me?'}/>
            <div className='about-me-card'>
                <div className='about-me-profile'>

                </div>
                <div className='about-me-details'>
                    <span className='about-me-description'>
                        {SCREEN_CONSTANTS.description}
                    </span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>
                                {SCREEN_CONSTANTS.highlights.heading}
                            </span>
                        </div>
                        {renderHighlights()}
                    </div>
                    <div className='about-me-options'>
                        <button className="btn primary-btn" onClick={ScrollService.scrollHandler.scrollHireMeScreen} >
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
            </div>
        </div>
    </div>
  )
}
