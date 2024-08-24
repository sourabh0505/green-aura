import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import './home.css'
import Slogan from '../Slogan/Slogan'
import AboutClub from '../AboutClub/AboutClub'
import Courses from '../Courses/Courses'
import MustWatch from '../MustWatch/MustWatch'

function Home() {
  return (
    <div className='homeContainer'>
        <ImageSlider/>
        <Slogan/>
        <AboutClub/>
        <Courses/>
        <MustWatch/>
    </div>
  )
}

export default Home