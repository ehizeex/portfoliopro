import './Home.css'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import React from 'react'

export default function Home() {
  return (
    <div className="home-container">
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  )
}
