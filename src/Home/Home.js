import React from 'react'
import './Home.css'
import Top from './Top/Top'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <div className='container'>
            <Top />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home