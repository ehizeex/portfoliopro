import "./Testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import React from "react";
import lady from '../../../src/img/Testimonial/lady.png'
import mike from '../../../src/img/Testimonial/mike.png'


export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const options = {
    loop: true,
    margin:0,
    nav:true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots:true,
    autoplay:true,
    smartSpeed:1000,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  }
  return (
    <div >
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Clients Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousal" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className='fa fa-quote-right'/>
                    </p>
                    <ul className='stars list-unstyled'>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star-half-alt'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt='no internet connection'></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InanGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className='fa fa-quote-right'/>
                    </p>
                    <ul className='stars list-unstyled'>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star-half-alt'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt='no internet connection'></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InanGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className='fa fa-quote-right'/>
                    </p>
                    <ul className='stars list-unstyled'>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                        <li>
                            <i className='fa fa-star-half-alt'/>
                        </li>
                        <li>
                            <i className='fa fa-star'/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={mike} alt='no internet connection'></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InanGlobal</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={'img/Testimonial/shape-bg.png'} alt="image not responding" />
      </div>
    </div>
  );
}
