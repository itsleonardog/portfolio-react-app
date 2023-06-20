import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_tbrjmvr', 'template_4yjrbeh', refForm.current, 'w-9GUivxmVpsbuKR6')
      .then (
        () => {
          alert('Message succesfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <div name='contact' className='w-full overflow-y: auto bg-[#0a192f] flex justify-center items-center p-4'>
      <form ref={refForm} onSubmit={sendEmail} action='' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// I am interested in freelance opportunities - from small projects,
            to big, ambitious ones. Don't hesitate to contact me using the form below!</p>
        </div>

        <div class="mb-4">
          <label class="block text-gray-400 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-400 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-400 text-sm font-bold mb-2" for="subject">
            Subject
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-400 text-sm font-bold mb-2" for="message">
            Message
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message" rows='5' required></textarea>
        </div>
        <input className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type='submit' value='SEND' />

        {/* <input className='bg-[#ccd6f6]' type='text' name='name' placeholder='Name' required></input>
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' name='email' placeholder='Email' required></input>
        <input className='my-4 p-2 bg-[#ccd6f6]' placeholder='Subject' type='text' name='subject' required />
        <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name='message' required></textarea>
        <input className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type='submit' value='SEND' /> */}

        {/* <input className='bg-[#ccd6f6]' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' />
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button> */}
      </form>
    </div>
  )
}

export default Contact
