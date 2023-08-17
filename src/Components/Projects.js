import React from 'react'
import NavBar from './NavBar'
import projectsData from '../projectsData'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div>
            <NavBar />
            <div className='projectMain'>
            <div className='projects project_cards'>
                <h1>Projects</h1>
                {projectsData.map((data) => (
                        <div class="card project-card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={data.img} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{data.name}</h5>
                            <p class="card-text">{data.description}</p>
                            <a href="#" class="btn btn-primary"><Link to={data.buttonLink}>View Project</Link></a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='aboveFooterInfo'>
                <h3>Let's build something together</h3>
                <button className='contactMe'>Contact Me</button>
            </div>
            <Footer />
            </div>
        </div>
    )
}

export default Projects