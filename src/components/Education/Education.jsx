import React, { useEffect } from 'react'


const Education = () => {
  useEffect(()=>{
   
   },[])
  return (
    <section className="Education" id='EDUCATION-PAGE'>
        <span className="education" >Educational Qualifications</span>
        <div className="qualification">
          <section className="school" >
               <span className="SCHOOL"><i class="fa-solid fa-school"></i> PG </span>
               <span className="SName">AMC ENGINEERING COLLEGE</span>
               <span className="SPlace"><i class="fa-solid fa-location-dot"></i> </span>
               <span className="SYear">2021-2023</span>
          </section>

          <section className="school" >
               <span className="SCHOOL"><i class="fa-solid fa-building-columns"></i> UG</span>
               <span className="SName">SDC COLLEGE </span>
               <span className="SPlace"><i class="fa-solid fa-location-dot"></i> Srinivaspur</span>
               <span className="SYear">2018-2021</span>
          </section>

          <section className="school" >
               <span className="SCHOOL"><i class="fa-solid fa-building-columns"></i> PUC</span>
               <span className="SName">GANGOTHRI PU COLLEGE</span>
               <span className="SPlace"><i class="fa-solid fa-location-dot"></i> Srinivaspur</span>
               <span className="SYear">2017-2018</span>
          </section>

          <section className="school" >
               <span className="SCHOOL"><i class="fa-solid fa-graduation-cap"></i> SCHOOL</span>
               <span className="SName">Sri G G Venu Rural Development Hight School </span>
               <span className="SPlace"><i class="fa-solid fa-location-dot"></i> Srinivaspur</span>
               <span className="SYear">2015-2016</span>
          </section>
          
        </div>
    </section>
  )
}

export default Education
