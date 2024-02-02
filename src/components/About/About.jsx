import React, { useEffect } from 'react'


const About = () => {
    useEffect(()=>{
       
       },[])
  return (
    <div className='about' id='ABOUT-PAGE'>
      <h6 className='MyIntro'>My Intro</h6>
      <h2 className='AboutMe'>About Me</h2>
      <p className='aboutPara'>I'm <b>Pavan Kalyan R V</b>, a passionate and detail-oriented web developer eager to make a mark in the digital world. <br />
      I specialize in front-end development and have a solid foundation in HTML, CSS, and JavaScript. I'm particularly adept at harnessing the power of React.js to build dynamic and responsive user interfaces. Additionally, I'm familiar with BootsTrap and other Frame Works.
      </p>
       <div className="IntroAbout" >
        <span>
            <h3> <i class="fa-solid fa-calendar-days"></i> Born</h3>
            <h4>04/02/1999</h4>
        </span>

        <span>
            <h3><i class="fa-solid fa-house-chimney"></i> Residence</h3>
            <h4>Bangalore</h4>
        </span>
        
        <span>
            <h3><i class="fa-solid fa-language"></i> Languages</h3>
            <h4>Kannada , English</h4>
        </span>

        <span>
            <h3><i class="fa-solid fa-dice-d20"></i> Intrests</h3>
            <h4>Cooking , Cricket , Movies</h4>
        </span>

        <span>
            <h3><i class="fa-solid fa-flag"></i> Nationality</h3>
            <h4>Indian</h4>
        </span>

        <span>
            <h3><i class="fa-solid fa-phone-volume"></i> Phone</h3>
            <h4>(+91) 7892348524</h4>
        </span>

        <span>
            <h3><i class="fa-solid fa-phone-volume"></i> Email</h3>
            <h4>pavankalyanrv1@gmail.com</h4>
        </span>

        <span>
            <h3><i class="fa-solid fa-location-dot"></i> Address</h3>
            <h4>Nagareswara Extension Ward no 11 new Kolar Circle , Srinivaspur</h4>
        </span>
       </div>

       <h1 id="followMe" >Follow me on Social Media</h1>
       <section className="socials">
        <a href="https://t.me/pavanKalyan" className='Facebook1' target='_blank'><i class="fa-brands fa-telegram"></i></a>
        <a href="https://instagram.com/mr.pavankalyan_kalyan?igshid=YmMyMTA2M2Y=" id='InstA' target='_blank'><i class="fa-brands fa-instagram" ></i></a>
        <a href="https://wa.me/7892348524" id='WApp' target='_blank'><i class="fa-brands fa-whatsapp" ></i></a>
        <a href="https://github.com/CodeCraftsman22" id='Git' target='_blank'><i class="fa-brands fa-github" ></i></a>
       </section>
    </div>
  )
}

export default About
