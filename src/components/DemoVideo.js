import React from "react"
import Vid1 from "./videos/autoScheduler.mp4"
import Vid2 from "./videos/coronaVirusTracker.mp4"
import Vid3 from "./videos/SmartBrainGift.mp4"
import ReactPlayer from "react-player";
import { SliderData1 } from "./SliderData1.js";

const DemoVideo = () => {
 return(
  <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url={SliderData1}
      width='70%'
      height='44%' 
      controls={true}
      playing={true}
    />
  </div>
 )
}
export default DemoVideo