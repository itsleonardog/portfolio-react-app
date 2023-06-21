import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#F4F4F4]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#80989B]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7 font-bold text-[#C8D5BB]'>Leonardo Genzolini</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#80989B]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8A8A8A] py-4 max-w-[700px]'>I'm a versatile and problem-solving-oriented Fullstack Developer,
        with experience in both front-end development, and back-end development.
        My knowledge of databases along with API integration and RESTful web services,
        allows me to create complete and high-performing software solutions.
        I pay particular attention to code quality, teamwork, and continuously updating my skills.
        My holistic view of software development makes me an ideal candidate for complex full-stack projects.
        </p>
        <div>
          <button className='text-[#8A8A8A] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#80989B] hover:text-[#F4F4F4] hover:border-[#80989B]'>View Work
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
