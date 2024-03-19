import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [{ id: 1, title: "Project 1", image: "https://pmstudycircle.com/wp-content/uploads/2021/06/project.jpg.webp" }, { id: 2, title: "Project 2", image: "https://pmstudycircle.com/wp-content/uploads/2021/06/project.jpg.webp" }, { id: 3, title: "Project 1", image: "https://pmstudycircle.com/wp-content/uploads/2021/06/project.jpg.webp" }, { id: 4, title: "Project 1", image: "https://pmstudycircle.com/wp-content/uploads/2021/06/project.jpg.webp" }]

    return (
        <div className='projects-container' id='projects'>
            <div className='projects-title'>Projects</div>
            <div className='projects-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

            <div className='projects-section'>
                {projects.map((project) => (
                    <div className='project-item' style={{
                        backgroundImage: "url(" + project.image + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}>

                        {hoveredProject === project.id && (
                            <div className='wrapper'>
                                <div className='project-item-title'>{project.title}</div>
                            </div>)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects