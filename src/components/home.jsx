import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7 font-bold text-[#ccd6f6]'>Leonardo Genzolini</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a versatile and problem-solving-oriented Fullstack Developer,
        with experience in both front-end development, and back-end development.
        My knowledge of databases along with API integration and RESTful web services,
        allows me to create complete and high-performing software solutions.
        I pay particular attention to code quality, teamwork, and continuously updating my skills.
        My holistic view of software development makes me an ideal candidate for complex full-stack projects.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
              <span className='group-hover:rotate-90 duration-300'>
                <Link to="work" smooth={true} duration={500}>
                  <HiArrowNarrowRight className='ml-3' />
                </Link>
              </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
