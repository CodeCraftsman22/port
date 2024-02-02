import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactMe = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a8ofytn', 'template_4r3l2cz', form.current, '1ApR11rJf_aeAHPbF')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email sent successfully')
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(()=>{
  
   },[])

  return (
    <div className='ContactMe'id='CONTACT-PAGE'>
      <div className="getInTouch" >Get in Touch</div>
      <div className="contacts2" >Contact Me</div>
      <div className="CONTACTS">
        <div className="contact1" >
            <span className="talkMe">Talk to me</span>
            <div className="contactEmail">
            <i class="fa-solid fa-envelope"></i>
            <span className="CEmail">Email</span>
            <span className="emailAdd">pavankalyanrv1@gmail.com</span>
            <a href="mailto:pavankalyanrv1@gmail.com" target='_blank'>Write Me <i class="fa-solid fa-pen-nib"></i></a>
            </div>
            
            <div className="contactEmail" >
            <i class="fa-brands fa-whatsapp"></i>
            <span className="CEmail">WhatsApp</span>
            <span className="emailAdd">7892348524</span>
            <a href="https://wa.me/7892348524" target='_blank'>Write Me <i class="fa-solid fa-pen-nib"></i></a>
            </div>

            <div className="contactEmail">
             <i class="fa-solid fa-envelope"></i>
            <span className="CEmail">Teligram</span>
            <span className="emailAdd" >Pavan Kalyan</span>
            <a href="https://t.me/Pavan Kalyan" target='_blank'>Write Me <i class="fa-solid fa-pen-nib"></i></a>
            </div>
        </div>
        <form className="contact2" ref={form} onSubmit={sendEmail} >
            <div className="writeMe">Write me your message</div>
            <input type="text" className="EnterName" placeholder='Enter Name' name='from_name'/>
            <input type="email" className="enterMail" placeholder='Enter Email' name='from_email'/>
            <textarea type="text" className="enterMsg" placeholder='Enter Message' style={{resize:'none'}} name='message'/>
          <button className="submitMe">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
