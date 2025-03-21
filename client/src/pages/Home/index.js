import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import LeftSide from './LeftSide'

function Home() {
  const { portfolioData } = useSelector(state => state.root)
  return (
    <div>
      <Header/>
      {portfolioData && <div className='bg-primary px-40 sm:px-5'>
        <Intro/>
        <About/>
        <Experiences/>
        <Projects/>
        <Courses/>
        <Contact/>
        <Footer/>
        <LeftSide/>
      </div>}
    </div>
  )
}

export default Home