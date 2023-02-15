import  {TOTAL_SCREENS} from './CommonUtils'
import {Subject} from 'rxjs'

export default class ScrollService{
    static scrollHandler = new ScrollService();
    
    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();
    

    constructor(){
        window.addEventListener('scroll',this.checkCurrentScreenUnderViewport);
    }

    scrollHireMeScreen = ()=>{
        let contactMeScreen = document.getElementById('ContactMe')
        if(!contactMeScreen){
            return;
        }
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }

    scrollToHomeScreen = ()=>{
        let homeScreen = document.getElementById('Home')
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }
    isElementInViewport = (elem, type)=>{
        let rec = elem.getBoundingClientRect();
        let top = rec.top;
        let bottom = rec.bottom;
        let partiallyVisible = top < window.innerHeight && bottom >=0; //not fully rendered
        let completelyVisible = top>=0 && bottom <=window.innerHeight; //fully rendered

        switch(type){
            case 'partial':
            return partiallyVisible;
            case 'complete':
                return completelyVisible;
            default:
                return false;

        }
    }

    checkCurrentScreenUnderViewport = (event)=>{
        if(!event || Object.keys(event).length<1)
        return;
        for(let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM){
                continue;
            }
            let fullyVisible = this.isElementInViewport(screenFromDOM,"complete");
            let partiallyVisible = this.isElementInViewport(screenFromDOM,"partial")
            if(fullyVisible || partiallyVisible){
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }   
        }
    }
}





