import React, { useEffect } from 'react'
import Img from '../Images/profile.png'



const Home = () => {
  useEffect(()=>{
   
  },[])
  return (
   <section className='intro' id='HOMEPAGE'>
     <div className="introContent">
      <span className="hello">Hello ,</span>
      <span className="introText">I'm <span className='introName' data-text='Pavan Kalyan R V.'>Pavan Kalyan R V.</span> <br />Front-end Developer</span>
      <p className="introPara">I strive to obtain a position that fosters my professional growth while empowering me to create a positive and lasting impact within the company.</p>
      <a href="www.google.com" className='cv'><i class="fa-solid fa-folder"></i> Download CV</a>
     </div>
     <img src={Img} alt="" className="bg" />
   </section>
  )
}

export default Home
