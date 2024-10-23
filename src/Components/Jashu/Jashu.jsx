import React from 'react'
import './Jashu.css'
import profile_img from '../../assets/profile_img.jpg'

const Jashu = () => {
  return (
    <div id='home' className='jashu'>
      <img src={profile_img} alt="jashu" />
      <h1><span>I'm Jashmitha Mandalapu,</span> Mern Stack Developer </h1>
      <p>I am a fellow at NXTwave academy,I am passionate about technologies and currently learning and developing skills to become a top notch professional. </p>
      <div className="jashu-action">
        <div className="jashu-connect">Connect with me</div>
        <a href="https://drive.google.com/file/d/1k4AWRVtOl6ykgXzyFznvVdAVeDr_6PJa/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <div className="jashu-resume">My Resume</div>
        </a>

      </div>
    </div>
  )
}

export default Jashu
