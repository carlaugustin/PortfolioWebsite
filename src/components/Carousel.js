import React from 'react';
import {FaCss3, FaHtml5, FaJava, FaJs, FaPython, FaReact} from "react-icons/fa";
import {GiMonoWheelRobot} from "react-icons/gi";


function Carousel() {
    return (
        <div>
            <div className='courosel-parent position-relative' id="courosel">
                <h1 className= 'position-absolute top-0 start-0 end-0 text-center mp-5'>Tech Stack</h1>
            
                <div className= 'gallery'>
                    <span style={{'--i' : 1}}>
                        <FaReact color='cyan'/>
                    </span>

                    <span style={{'--i' : 2}}>
                     <FaJava color='orange'/>
                    </span>   

                    <span style={{'--i' : 3}}>
                     <FaPython color='yellow'/>
                    </span>   

                    <span style={{'--i' : 4}}>
                     <GiMonoWheelRobot color='cyan'/>
                    </span>
                             

                    <span style={{'--i' : 5}}>
                     <FaHtml5 color='orangered'/>
                    </span> 

                    <span style={{'--i' : 6}}>
                     <FaJs color='yellow'/>
                    </span>  

                    <span style={{'--i' : 7}}>
                     <FaCss3 color='blue'/>
                    </span>
                    
                    
                              
                </div>

            </div> 

        </div>
    )
}

export default Carousel;