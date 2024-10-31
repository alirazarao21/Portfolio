import React from 'react'

const service =[
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
    dercription: " Have a strong grip in React js and its Concepts"
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
            {service.map(service =>(
              <div key={service.id}
              className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                  <div  className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                    {service.id}
                  </div>
                  <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>{service.title}</h3>
                  <p className='mt-2 text-gray-300'>{service.dercription}</p>
                  <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Services
