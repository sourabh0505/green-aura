import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import './home.css'
import Slogan from '../Slogan/Slogan'
import AboutClub from '../AboutClub/AboutClub'
import Courses from '../Courses/Courses'

function Home() {
  return (
    <div className='homeContainer'>
        <ImageSlider/>
        <Slogan/>
        <AboutClub/>
        <Courses/>
    </div>
  )
}

export default Home