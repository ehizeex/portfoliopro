import React,{useState} from 'react'
import './Header.css'
import {TOTAL_SCREENS , GET_SCREEN_INDEX} from '../../../Utilities/CommonUtils'
import ScrollService from '../../../Utilities/ScrollService'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    function updatecurrentScreen(currentScreen){
        if(!currentScreen || currentScreen.screenInView) 
        return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex < 0){
            return;
        }

    }

    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updatecurrentScreen);

    function getHeaderOptions(){
        return (
            TOTAL_SCREENS.map((screen, i)=>(
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={()=> switchScreen(i, screen) }>
                    <span>{screen.screen_name}</span>
                </div>
            ))

        )
    }

    function getHeaderOptionsClass(index){
        let classes = "header-option ";
        if(index <TOTAL_SCREENS.length-1){
            classes += 'header-option-seperator '
        }
        if(selectedScreen===index){
            classes += "selected-header-option "
        }
        return classes;
    }
    function switchScreen(index, screen){
        let screenComponenet = document.getElementById(screen.screen_name);
        if(!screenComponenet)
        return;

        screenComponenet.scrollIntoView({behavior: "smooth"})
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }
    return (
        <div className="header-container" onClick={()=>setShowHeaderOptions(!showHeaderOptions)}>
            <div className="header-parent">
                <div className="header-hamburger" onClick={()=>setShowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className="header-hamburger-bars" icon={faBars}/>
                </div>
                <div className='header-logo'>
                    <span>
                        L@ya
                    </span>
                </div>
                <div className={(showHeaderOptions)? 'header-options show-hamburger-option' : 'header-options'} >
                    {getHeaderOptions(showHeaderOptions)}
                </div>
            </div>
        </div>
    )
}
