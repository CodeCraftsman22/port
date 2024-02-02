import React, { useEffect } from 'react'


const Skills = () => {
    useEffect(()=>{
       
       },[])
  return (
    <div className='Skills' id='SKILLS-PAGE'>
        <h1 className="skillName" >Technical Skills</h1>
         <div className="SkillSets">
            <div className="JAVA-WEB" >
                <h1 className="Technologies">Front-end Technologies</h1>
                <div className="TechName">
                    <img src="https://clipground.com/images/html5-png-image-10.png" alt="" />
                     <div className="techNames">
                        <h1>HTML</h1>
                        <div className="skill-bar">
                            <span className="skill-per html">
                                <span className="skill-toolTip">100%</span>
                            </span>
                        </div>
                     </div>
                </div>

                <div className="TechName">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png" alt="" />
                    <div className="techNames">
                        <h1>CSS</h1>
                        <div className="skill-bar">
                            <span className="skill-per css">
                                <span className="skill-toolTip">100%</span>
                            </span>
                        </div>
                     </div>
                </div>

                <div className="TechName">
                    <img src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png" alt="" />
                    <div className="techNames">
                        <h1>JAVA SCRIPT</h1>
                        <div className="skill-bar">
                            <span className="skill-per js">
                                <span className="skill-toolTip">95%</span>
                            </span>
                        </div>
                     </div>
                </div>
                <div className="TechName">
                    <img src="https://uploads-ssl.webflow.com/60a2acace1fd91aae61c497d/60ee04a3dee9b428a836325f_React_logo_logotype_emblem-p-3200.png" alt="" />
                    <div className="techNames">
                        <h1>REACT JS</h1>
                        <div className="skill-bar">
                            <span className="skill-per react">
                                <span className="skill-toolTip">90%</span>
                            </span>
                        </div>
                     </div>
                </div>
                <div className="TechName">
                    <img src="https://logospng.org/download/bootstrap/bootstrap-1536.png" alt="" />
                    <div className="techNames">
                        <h1>BOOTSTRAP</h1>
                        <div className="skill-bar">
                            <span className="skill-per bootstrap">
                                <span className="skill-toolTip">85%</span>
                            </span>
                        </div>
                     </div>
                </div>

            </div>
            <div className="JAVA-WEB" >
                 <h1 className="Technologies">Back-end Technologies</h1>
                 <div className="TechName">
                    <img src="https://uploads-ssl.webflow.com/5ffe5bee629c3505f14fb1fd/604aa487faeeda20e43980d2_java_logo.png" alt="" />
                    <div className="techNames">
                        <h1>CORE JAVA</h1>
                        <div className="skill-bar">
                            <span className="skill-per java">
                                <span className="skill-toolTip">85%</span>
                            </span>
                        </div>
                     </div>
                </div>

                <div className="TechName">
                    <img src="" alt="" />
                    <div className="techNames">
                        <h1>JDBC</h1>
                        <div className="skill-bar">
                            <span className="skill-per Jdbc">
                                <span className="skill-toolTip">80%</span>
                            </span>
                        </div>
                     </div>
                </div>

                <div className="TechName">
                    <img src="" alt="" />
                    <div className="techNames">
                        <h1>HIBERNATE</h1>
                        <div className="skill-bar">
                            <span className="skill-per hibernate">
                                <span className="skill-toolTip">60%</span>
                            </span>
                        </div>
                     </div>
                </div>

                <div className="TechName">
                    <img src="https://altyra.com/wp-content/uploads/2018/11/mysql-logo-png-transparent.png" alt="" />
                    <div className="techNames">
                        <h1>MY SQL</h1>
                        <div className="skill-bar">
                            <span className="skill-per sql">
                                <span className="skill-toolTip">50%</span>
                            </span>
                        </div>
                     </div>
                </div>

            </div>
         </div>
    </div>
  )
}

export default Skills
