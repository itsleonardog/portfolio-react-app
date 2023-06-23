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
            <img className='rounded-full w-40 shadow-lg shadow-[#D4DCDA] mx-auto' src={Leonardo} alt='Leonardo' />
              {/* <p>
                Hi, I'm Leonardo
              </p> */}
            </div>
            <div>
              <p>
                My journey with coding started during my years at university, curious
                to understand how softwares work and eager to explore the world of programming.
                As I delved into the realm of coding, I found myself captivated by its
                limitless possibilities and the ability to bring ideas to life through lines of code.
              </p>
              <br />
              <p>
                Over the years, I have honed my skills in various programming languages such as
                Ruby, JavaScript, and React, gaining expertise in both front-end and back-end development.
                From building interactive websites to developing scalable web applications, I have
                embraced the challenges that come with each project and have consistently sought opportunities
                to expand my knowledge and refine my craft.
              </p>
              <br />
              <p>
                When I'm not coding, you can find me sitting at my piano, where I channel my artistic expression into
                composing music for my alter-ego Tuisku. Through music, I am able to delve into a realm of harmonies that
                bring my emotions to life.
              </p>
              {/* <br />
              <p>
                I also enjoy taking leisurely walks and capturing moments with my trusty film cameras.
                There's just something special about the tangible nature of film photography,
                as it allows me to freeze time and preserve memories in a way that feels authentic and nostalgic.
              </p> */}
              {/* <br />
              <p>
                These creative endeavors provide a balance to my coding journey, nurturing my imagination and allowing
                me to explore different forms of self-expression.
              </p> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
