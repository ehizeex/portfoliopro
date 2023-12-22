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
import man from '../../../src/img/Testimonial/man.png'


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
                        I would like to express my utmost satisfaction with your punctuality in completing tasks. Your ability to consistently deliver work on time is truly commendable and adds a great sense of reliability.
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
                    <img src={man} alt='no internet connection'></img>
                    <h5>Ali </h5>
                    <p>Programmer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                        I wanted to take a moment to appreciate your commitment to keeping your promises. Your trustworthiness and ability to fulfill your commitments make it a pleasure to work with you.
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
                    <h5>Hossein</h5>
                    <p>Software Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                        I am beyond grateful for the exceptional teaching provided by you. Your ability to break down complex concepts into easily digestible pieces made learning a joy rather than a chore.   </p>
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
                    <h5>Naeemeh Beigzadeh</h5>
                    <p>Computer Science Student</p>
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
