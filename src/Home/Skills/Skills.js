import React, { useState } from 'react'
import './Skills.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const skillsData = [
        { name: 'Javascript', value: 10 },
        { name: 'Python', value: 20 },
        { name: 'C++', value: 30 },
        { name: 'NodeJS', value: 40 },
        { name: 'Matlab', value: 50 }
    ];

    const slide = (direction) => {
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex <= skillsData.length - 3) {
            setCurrentIndex(newIndex);
        }
    };


    return (
        <div className='skills-container' id='skills'>
            <div className='skills-title'>Skills</div>
            <div className='skills-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='carousel-container'>
                <div className='skills-circles-container'>
                    {skillsData.slice(currentIndex, currentIndex + 3).map((skill, index) => (
                        <div className='skill-circle-item' key={index}>
                            <CircularProgressbar value={skill.value} className='skill-progress-bar' counterClockwise={true}
                                styles={buildStyles({
                                    rotation: 0,
                                    strokeLinecap: 'round',
                                    pathTransitionDuration: 0.5,
                                    // Colors
                                    pathColor: `rgba(0, 0, 0)`,
                                    trailColor: '#ffffff',
                                    backgroundColor: '#3e98c7',
                                })} />
                            <div className='skill-name'>{skill.name}</div>
                        </div>
                    ))}
                </div>
                <button className='carousel-btn prev' onClick={() => slide(-1)}>&#10094;</button>
                <button className='carousel-btn next' onClick={() => slide(1)}>&#10095;</button>
            </div>
        </div>
    )
}

export default Skills