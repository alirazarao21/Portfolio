import React from 'react'

const services =[
  {
    id: 1,
    title: "Web Design",
    dercription: " Creating visual appealing and user friendly web designs"
  },
  {
    id: 2,
    title: "Front End Dveloper",
    dercription: " Building responsive and interactive user interface"
  },
  {
    id: 3,
    title: "React Js",
    dercription: " Have a string grip in React js and its Concepts"
  },
  {
    id: 4,
    title: "Full Stack Developer",
    dercription: "Combines both front end and back end skills"
  },

]
const Services = () => {
  return (
    <div className='bg-black text-white py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        </div>
      </div>
    </div>
  )
}

export default Services
