import React from 'react'
import Aboutimg from '../assets/img.png.jpg'
const About = () => {
  return (
    <div className='bg-black text-white py-20'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
       <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
         <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img className='w-72 h-80 rounded object-cover mb-8 md:mb-0' src={Aboutimg} alt="" />
           <div className='flex-1'>
            <p className='text-lg md-8'>
                I am a passionate Front End Developer with a focus on building modern and responsive web application.
                With a Strong foundation in front end technologies,
                I strive to create seamless and efficient user experience.
            </p>
            </div>
         </div>
         </div>
    </div>
  )
}

export default About
