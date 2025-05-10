import React from 'react'
import Typewriter from 'typewriter-effect'
import Resume from "../../assets/docs/resume.txt"

import "./Home.css"
const Home = () => {
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container home-content'>
          <h1>Hi, I'm </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  'a RPA Developer',
                  'a Python Developer',
                  'a Data Enthuasiast'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </h2>
          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button>
            <a className='btn btn-cv' href={Resume} download='your_name.pdf'>My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home