import React from 'react'
import MemoMio from '../assets/memomio.png'
import NewBnb from '../assets/newbnb.png'
import Conversa from '../assets/conversa.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#8A8A8A] bg-[#F4F4F4]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl text-[#C8D5BB] font-bold inline border-b-4 text-gray-300 border-[#80989B]'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          <div style={{backgroundImage: `url(${MemoMio})`}}
          className='shadow-lg shadow-[#80989B] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover fx */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                MemoMio
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.memomio.eu/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                </a>
                <a href='https://github.com/philipposophos/memomio'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${NewBnb})`}}
          className='shadow-lg shadow-[#80989B] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover fx */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                NewBnb
              </span>
              <div className='pt-8 text-center'>
                <a href='https://newbnb.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/flo-kichijoji/NewBnB'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Conversa})`}}
          className='shadow-lg shadow-[#80989B] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover fx */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                Conversa
              </span>
              <div className='pt-8 text-center'>
                <a href='https://conversa-chat.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/itsleonardog/conversa'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
