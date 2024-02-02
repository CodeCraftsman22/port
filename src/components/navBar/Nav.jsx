import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Images/attachment_126914890-removebg-preview.png'
import { Link } from 'react-scroll'

const Nav = () => {
    

     const[showMenu,setShoeMenu]=useState(false)
    
    let navRef=useRef()
    useEffect(()=>{
    },[])
  
  return (
   <nav  ref={navRef}>
    
       <img src={Logo} alt="" id='Logo'/>
       <div>
        <Link className='active' to='HOMEPAGE' spy={true} smooth={true} offset={-100} duration={500} id='navLinks'>HOME</Link>
        <Link className='active' to='ABOUT-PAGE' spy={true} smooth={true} offset={-40} duration={500} id='navLinks'>ABOUT</Link>
        <Link className='active' to='EDUCATION-PAGE' spy={true} smooth={true} offset={-170} duration={500} id='navLinks'>EDUCATION</Link>
        <Link className='active' to='SKILLS-PAGE' spy={true} smooth={true} offset={-100} duration={500} id='navLinks'>SKILLS</Link>
        <Link className='active' to='WORK-PAGE' spy={true} smooth={true} offset={-30} duration={500} id='navLinks'>WORKS</Link>
       </div>
       <button className='contact' onClick={()=>{
          document.getElementById('CONTACT-PAGE').scrollIntoView({behavior:'smooth'});

       }}>
       <i class="fa-regular fa-comment" id='CONTACT'></i>
       <span>Contact Me</span>
       </button>

       {/*-MOBILE VIEW MENU--*/}
      
      <div className="newMenuBar" style={{background: showMenu? '#151c28':'transparent'}}>
      {showMenu ? <img src='https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-5.jpg' alt="no" id='Logo' className='newMenuLogo' onClick={()=>setShoeMenu(!showMenu)}/> : <img src='https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg' onClick={()=>setShoeMenu(!showMenu)} alt='no' id='Logo' className='newMenuLogo'/>}
       <div className='newMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link className='active' to='HOMEPAGE' spy={true} smooth={true} offset={-100} duration={500} id='MobileLinks' onClick={()=>setShoeMenu(false)}>HOME</Link>
        <Link className='active' to='ABOUT-PAGE' spy={true} smooth={true} offset={-80} duration={500} id='MobileLinks'onClick={()=>setShoeMenu(false)}>ABOUT</Link>
        <Link className='active' to='EDUCATION-PAGE' spy={true} smooth={true} offset={-100} duration={500} id='MobileLinks'onClick={()=>setShoeMenu(false)}>EDUCATION</Link>
        <Link className='active' to='SKILLS-PAGE' spy={true} smooth={true} offset={-50} duration={500} id='MobileLinks'onClick={()=>setShoeMenu(false)}>SKILLS</Link>
        <Link className='active' to='WORK-PAGE' spy={true} smooth={true} offset={-80} duration={500} id='MobileLinks'onClick={()=>setShoeMenu(false)}>WORKS</Link>
        <Link className='active' to='CONTACT-PAGE' spy={true} smooth={true} offset={-80} duration={500} id='MobileLinks'onClick={()=>setShoeMenu(false)}>CONTACT ME</Link>
       </div>
      </div>
      
    
   </nav>
  )
}

export default Nav
