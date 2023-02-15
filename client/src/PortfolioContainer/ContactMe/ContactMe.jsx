import React,{useState} from 'react'
import { TypeAnimation } from 'react-type-animation'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations'
import axios from 'axios'
import {toast} from 'react-toastify'
import './ContactMe.css'


export default function ContactMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [boolean,setBoolean] = useState(false);
    function handleName(event) {
        setName(event.currentTarget.value);
    }
    function handleEmail(event){
        setEmail(event.currentTarget.value);
    }
    function handleMessage(event){
        setMessage(event.currentTarget.value);
    }
    async function submitForm(event){
        event.preventDefault();
        try{
            let data = {
                name,
                email,
                message,
            }
            setBoolean(true);
            const res = await axios.post('/contact',data);
            if(name.length===0 || email.length===0 || message.length===0){
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBoolean(false);
            }
            else if(res.status ===200){
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBoolean(false)
                setName("")
                setEmail("")
                setMessage("")
            }
        }catch(e){
            console.log(e)
        }

    }

    console.log(name, email, message)
  return (
    <div className="main-container fade-in" id={props.id || ''}>
        <ScreenHeading subHeading={'Lets Keep In Touch'}
        title={'Contact Me'}
        />
        <div className="central-form">
            <div className="col">
              <h2 className="title">
                  <TypeAnimation 
                  repeat={Infinity}
                  sequence={[
                      "Get In Touch 📧",
                      1000,
                      "",
                      1000,
                  ]}
                  />
              </h2>
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
            <div className="back-form">
                <div className="img-back">
                    <h4>
                      Send Your Email Here!
                    </h4>
                    <img src={imgBack} alt="No internet connection"/>
                </div>
                <form className="" onSubmit={submitForm}>
                    <p>
                        {banner}
                    </p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" onChange={handleName} value={name} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleEmail} value={email} />
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="" id="message" value={message} onChange={handleMessage}/>

                    <div className="send-btn">
                        <button type="submit" >
                            send 
                            <i className="fa fa-paper-plane"/>
                            {boolean ? (
                            <b className="load"> 
                            <img src={load1} alt="no internet connectionb"/>
                            </b>
                            ):
                            ("")
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}
