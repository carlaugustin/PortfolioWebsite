
import React from "react"
import {Carousel} from 'react-bootstrap'
import Vid1 from "./videos/autoScheduler.mp4"
import Vid2 from "./videos/coronaVirusTracker.mp4"
import Vid3 from "./videos/SmartBrainGift.mp4"
import ReactPlayer from "react-player"
import "../stylesheets/VideoCarousel.css"

const VideoCarousel = () => {

    const videoProperties = [
      {
        id: 1,
        title: "Smart Robo Brain",
        src: Vid1,
        credit: "Video by Carl",
      },
      {
        id: 2,
        title: "Auto Scheduler",
        src: Vid2,
        credit: "Video by Carl",
      },
      {
        id: 3,
        title: "Corona Virus Tracker",
        src: Vid3,
        credit: "Video by Carl",
      },
    ]
    
    return (
      <div className="App">
        <Carousel>
          <h1>Hello Im Here</h1>
          {
            videoProperties.map((videoObj) => {
              return (
                <Carousel.Item key={videoObj.id}>
                  <ReactPlayer
                    url={videoObj.src}
                    pip={true}
                    controls={true}
                    playing={true}
                  />
                  <Carousel.Caption>
                    <h3>{videoObj.title}</h3>
                    <p>{videoObj.credit}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
    )
  }
export default VideoCarousel