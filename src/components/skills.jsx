import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactLogo from '../assets/react.png'
import Bootstrap from '../assets/bootstrap.png'
import Ruby from '../assets/ruby.png'
import Rails from '../assets/rails.png'
import SQL from '../assets/sql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#F4F4F4] text-[#8A8A8A]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl text-[#C8D5BB] font-bold inline border-b-4 border-[#80989B]'>Skills</p>
          <p className='py-4'>// These are the technologies I work with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-lg shadow-[#80989B] rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-lg shadow-[#80989B] rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-lg shadow-[#80989B] rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-lg shadow-[#80989B] rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactLogo} alt='ReactLogo icon' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-lg shadow-[#80989B] rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Bootstrap} alt='Bootstrap icon' />
            <p className='my-4'>BOOTSTRAP</p>
          </div>
          <div className='shadow-lg shadow-[#80989B] rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Ruby} alt='Ruby icon' />
            <p className='my-4'>RUBY</p>
          </div>
          <div className='shadow-lg shadow-[#80989B] rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Rails} alt='Rails icon' />
            <p className='my-4'>RAILS</p>
          </div>
          <div className='shadow-lg shadow-[#80989B] rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={SQL} alt='SQL icon' />
            <p className='my-4'>SQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
