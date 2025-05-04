
import React from 'react';
import './Menus.css';
import { FcContacts, FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { TbStack3Filled } from "react-icons/tb";
import { FcGraduationCap } from "react-icons/fc";
import { FaCode } from "react-icons/fa";


const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (<>
        <div className='navbar-profile-pic'>
          <img src='data:image/jpeg;base64,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' alt='profile pic' />
        </div>
        <div className='nav-items'>
          <div className='nav-item'>
            <div className='nav-link'>
              <FcHome />Home
            </div>
            <div className='nav-link'>
              <FcAbout />About
            </div>
            <div className='nav-link'>
              <FcBriefcase />Work Experience
            </div>
            <div className='nav-link'>
              <TbStack3Filled />Tech Stack
            </div>
            <div className='nav-link'>
              <FcGraduationCap />Education
            </div>
            <div className='nav-link'>
              <FaCode />Projects
            </div>
            <div className='nav-link'>
              <FcContacts />Contact
            </div>
          </div>
        </div>
      </>) : (
        <>
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <FcHome title='Home' />
              </div>
              <div className='nav-link'>
                <FcAbout title='About' />
              </div>
              <div className='nav-link'>
                <FcBriefcase title='Work Experience' />
              </div>
              <div className='nav-link'>
                <TbStack3Filled title='Tech Stack' />
              </div>
              <div className='nav-link'>
                <FcGraduationCap title='Education' />
              </div>
              <div className='nav-link'>
                <FaCode title='Projects' />
              </div>
              <div className='nav-link'>
                <FcContacts title='Contact' />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Menus