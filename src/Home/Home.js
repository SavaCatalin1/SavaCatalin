import React from 'react'
import './Home.css'
import Top from './Top/Top'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

const Home = () => {
    return (
        <div className='container'>
            <Top />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home