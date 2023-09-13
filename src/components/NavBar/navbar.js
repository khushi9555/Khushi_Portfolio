import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu , setshowMenu] = useState(false);
  return (
      <nav className="navbar">
        {/* <img src={logo} alt="logo" class='logo' /> */}
        <h1 className='logo'>K</h1>
        <div className="desktopMenu">
               <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
               <Link activeClass='active' to="services" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Services</Link>
               <Link activeClass='active' to="skill" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Skill</Link>
               {/* <Link className="desktopMenuListItem">Education</Link> */}
               <Link activeClass='active' to="work" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
           <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me 
        </button>

        {/* For Mobile View */}
        <img src={menu} alt="Menu" class='mobMenu' onClick={() => setshowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
               <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setshowMenu(false)}>Home</Link>

               <Link activeClass='active' to="services" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setshowMenu(false)}>Services</Link>

               <Link activeClass='active' to="skill" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={() => setshowMenu(false)}>Skill</Link>

               <Link activeClass='active' to="work" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setshowMenu(false)}>Portfolio</Link>
               
               <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setshowMenu(false)}>Contact</Link>
        </div>
      </nav>
  )
}

export default Navbar
