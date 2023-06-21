import React from 'react'
import Leonardo from '../assets/propic.jpg'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#F4F4F4] text-[#8A8A8A]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl text-[#C8D5BB] font-bold inline border-b-4 border-[#80989B]'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <img className='w-40 rounded-full shadow-lg shadow-[#D4DCDA] mx-auto' src={Leonardo} alt='Leonardo' />
              {/* <p>
                Hi, I'm Leonardo
              </p> */}
            </div>
            <div>
              <p>
                I'm a Full-stack Developer from Italy, currently based in Perugia.
              </p>
              <br />
              <p>
              I have a deep passion for developing outstanding software solutions
              that have a positive impact on the lives of people around me.
              My expertise lies in crafting software applications for a diverse
              range of clients, including individuals, small businesses, and large enterprises.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
