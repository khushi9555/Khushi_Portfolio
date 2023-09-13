import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skill">
        <h5>What Skills I have </h5>
        <h2 className='skillTitle'>My <span className="title">Skills</span></h2>
        <div className="skill_container">
             {/* FrondEnd Developement */ }
            <div className="skill_frontend">
               <h3>Frontend Development</h3>
               <div className="skill_content">
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                        <div><h4>HTML</h4>
                       <small>Experienced</small></div>
                   </article>
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                       <div><h4>CSS</h4>
                       <small>Intermediate</small></div>
                   </article>
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                       <div><h4>Javascript</h4>
                       <small>Intermediate</small></div>
                   </article>
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                       <div><h4>Bootstrap</h4>
                       <small>Intermediate</small></div>
                   </article>
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                       <div><h4>React Js</h4>
                       <small>Experienced</small></div>
                   </article>

               </div>
            </div>
            <div className="skill_backend">
                <h3>Backend Development</h3>
                <div className="skill_content">
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                       <div><h4>Node Js</h4>
                       <small>Beginner</small></div>
                   </article>
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                       <div><h4>Express Js</h4>
                       <small>Beginner</small></div>
                   </article>
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                       <div><h4>MongoDB</h4>
                       <small>Intermediate</small></div>
                   </article>
                   <article className='skill_details'>
                       <BsPatchCheckFill className='skill_details-icon'/>
                       <div><h4>My SQL</h4>
                       <small>Experienced</small></div>
                   </article>

               </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
