'use client'
import React from 'react'
import Contact from '../Component/Contact/Contact'
import { useForm, ValidationError } from '@formspree/react';
const page = () => {
  const [state, handleSubmit] = useForm("xvojgzen");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <div style={{justifyContent: 'space-evenly'}} className='relative top-[150px] flex  items-start contact'>
      <div className='contact-title'>
        <h1 className='text-[55px] m-0 font-semibold text-black'>Get in Touch</h1>
        <br />
        <span className='text-[55px] m-0 font-semibold text-yellow' >Contact me</span>
      </div>
      <div className='blur'
      style={{top: '20px'}}></div>
      <form className='flex flex-col items-center justify-center ' action='https://formspree.io/f/xvojgzen' method="POST" onSubmit={handleSubmit}>
     <input className='w-[400px] border-[3px] border-yellow rounded-lg bg-white p-5 max-w-lg mb-10 ' id="name" type="name"  name="name" placeholder='Name' />
      <ValidationError  prefix="name" field="name" errors={state.errors} />

      <input className='w-[400px] border-[3px] border-yellow rounded-lg bg-white p-5 max-w-lg mb-10 '  id="email" type="email"  name="email" placeholder='Email' />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea className='w-[400px] border-[3px] border-yellow rounded-lg bg-white p-5 max-w-lg mb-10 '  id="message" name="message" placeholder='Message' />
      <ValidationError prefix="Message"  field="message" errors={state.errors} />

      <button  className='p-3 font-semibold text-white rounded-full shadow-lg bg-yellow px-7 shadow-orange' type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
     <div  className='blur-bottom' ></div>
   </div>
   
   <div className='text-center text-black relative top-[310px] '>
       ammaryousef175@gmail.com
   </div>
    </>
  )
}

export default page