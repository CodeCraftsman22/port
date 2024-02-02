import React, { useEffect } from 'react'
import Tesla from '../Images/Tesla.png'
import Havenly from '../Images/Havenly.png'
import VisionM4 from '../Images/Vision M4.png'
import DanceImg from '../Images/Capture1.JPG'

const Works = () => {
  useEffect(()=>{
   
   },[])
  return (
    <div className='Works' id='WORK-PAGE'>
      <div className="WorkName" >My Works</div>
      <h1 className="workBrief">The comprehensive web pages built using a stack of modern web technologies, including HTML, CSS, and JavaScript.</h1>
      <div className="PROJECTS">
        <div className="projects1" >
          <img src={Tesla} alt="" className='projectImg'/>
          <h2 className="projectName">Tesla Website</h2>
          <h5 className="projectLink1"><a href="https://codecraftsman22.github.io/Offical-Tesla-website/" target='_blank' rel="noreferrer">Demo <i class="fa-solid fa-caret-right" id='carot'></i></a></h5>
        </div>
        <div className="projects1" >
          <img src={Havenly} alt="" className='projectImg'/>
          <h2 className="projectName">Havenly Website</h2>
          <h5 className="projectLink1"><a href="https://github.com/CodeCraftsman22/interior-design-website" target='_blank' rel="noreferrer">Demo <i class="fa-solid fa-caret-right" id='carot'></i></a></h5>
        </div>
        <div className="projects1" >
          <img src={VisionM4} alt="" className='projectImg'/>
          <h2 className="projectName">IT consultant Website</h2>
          <h5 className="projectLink1"><a href="https://codecraftsman22.github.io/IT-consultant-Website/" target='_blank' rel="noreferrer">Demo <i class="fa-solid fa-caret-right" id='carot'></i></a></h5>
        </div>
      </div>

      <div className="ReactProject">
          <div className='ReactProjectAbout' >
             <span className="RPD-A">Project Name : <span className="RPNAme">Portfolio</span></span>
             <span className="RD-description">Description : <span className='RP_ABOUT'>A portfolio app developed using React.js is a modern and interactive platform designed to cater to the needs of  Leveraging the capabilities of React.js, this application offers a seamless and engaging user experience with its dynamic user interface.</span></span>
          </div>
          <div className="ReactDanceApp" >
          <div className="projects1">
          <img src={DanceImg} alt="" className='projectImg'/>
          <h2 className="projectName">React Project : Portfolio</h2>
          <h5 className="projectLink1"><a href="https://codecraftsman22.github.io/Based-Age_calculator/" target='_blank' rel="noreferrer">Demo <i class="fa-solid fa-caret-right" id='carot'></i></a></h5>
        </div>
          </div>
      </div>
    </div>
  )
}

export default Works
