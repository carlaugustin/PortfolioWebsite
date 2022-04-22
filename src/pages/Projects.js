import React from 'react'
import Header from '../components/Header'
import projectsdata from './projectsdata'
import Footer from "../components/Footer"
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'
import VideoCarousel from '../components/VideoCarousel'
import DemoVideo from '../components/DemoVideo'


function Projects() {
    return (
        <div>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <div className="container projects-list" id="projects-list" >
                <h3 className='font-bold'>Take a look at my projects</h3>
                <hr/>
                <div className='row'>
                    {
                        projectsdata.map(project=>{
                            return <div className="projects col-md-6">
                                <div className='position-relative box project'>
                                    <img src={project.image} alt='' className=''/>
                                    <div className='project-content w-100'>
                                        <h3 class="title">{project.title}</h3>
                                        <hr/>
                                        <p class="text">{project.description}</p>
                                        <button className="primary-button font-bold" ><a href={project.link} >DEMO</a></button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </div>
    )
}

export default Projects;
