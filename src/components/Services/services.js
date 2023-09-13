import React from 'react'
import './services.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Services = () => {
  return (
    <section id="services">
        <h5>What I do</h5>
        <span className="serviceTitle">Our <span className='title'>Services</span></span>
        <span className="serviceDesc">Seeking for an opportunity as a Software Developer & Frondend Developer to apply me exceptional knowledge and skills. I am also available for freelance services.</span>
        <div className="serviceBars">
             <div className="serviceBar">
                <img src={UIDesign} alt="UIDesign" className="serviceBarImg" />
                <div className="serviceBarText">
                    <h2>Software Development </h2>
                   <p>I have good problem-solving skill and have experienced in programming language like C & C++ . I have also done Data Structure & Algorithum and solve more than 500 problem on various coding platform.</p>
                   <a href=" https://auth.geeksforgeeks.org/user/khushipandey9555" className='btn1'>GeeksforGeeks</a>
                   <a href="https://leetcode.com/khushipandey9555/" className='btn1 btn2'>Leetcode</a>
                </div>
             </div>

             <div className="serviceBar">
                <img src={WebDesign} alt="WebDesign" className="serviceBarImg" />
                <div className="serviceBarText">
                    <h2>Frontend Development</h2>
                    <p> I am skilled in developing responsive, animated and user friendly web page. I can develop portfolio , e-commerce and other website by using React js. </p>
                </div>
             </div>

             <div className="serviceBar">
                <img src={AppDesign} alt="AppDesign" className="serviceBarImg" />
                <div className="serviceBarText">
                    <h2>Backend Development </h2>
                    <p></p>
                </div>
             </div>
        </div>
    </section>
  )
}

export default Services
