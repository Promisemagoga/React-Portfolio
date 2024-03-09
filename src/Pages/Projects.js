import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import projects from '../Data/projects'

function Projects() {
    return (
        <div>
            <NavBar />
            <div className='projectMain'>
                <div className='projects project_cards'>
                    <h1>Projects</h1>
                    {projects.map((data) => (
                        <div class=" project-card" >
                            <img class="card-img-top" src={require(`../assets/${data.img}`)} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{data.name}</h5>
                                {/* <div className='skillCard'>

                                    {data.techStack.map((stack, index) => (
                                        <h3 className='stack' key={index}>{stack}</h3>
                                    ))}
                                </div> */}
                                <p class="card-text">{data.description}</p>
                                <div className='stack'>
                                    <h5>Technology used:</h5>
                                    {data.techStack.map((stack, index) => (
                                        <ul key={index}>
                                            <li>{stack}</li>
                                        </ul>
                                    ))}
                                </div>
                                <div className='linkBtns'>
                                    <Link class="btn resume-button" to={data.buttonLink}>View Project</Link>
                                    <Link class="btn projectsBtn" to={data.githubLink}>Source Code</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='aboveFooterInfo'>
                    <h3>Let's build something together</h3>
                    <button className='contactMe'><Link to="/ContactMe" className="homeLink">Contact Me</Link></button>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Projects