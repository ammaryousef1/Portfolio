import React from 'react'
import Toggle from './Toggle'
import Image from 'next/image'
import Github from '../assets/image/github.png'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between m-5 mx-10'>
        <div className='flex items-center gap-3'>
            <h1 className='text-xl font-bold text-black'>Ammar</h1>
            <Toggle />
        </div>
        <div className='flex items-center gap-10'>
            <ul className='flex gap-20 text-black'>
                <li className='font-semibold text-black'>Home</li>
                <li className='font-semibold text-black'>Skills</li>
                <li className='font-semibold text-black'>Projects</li>
            </ul>
            <button 
            className='p-3 text-white rounded-full shadow-lg bg-yellow px-7 shadow-orange'>
            Contact
            </button>
            <div className='blur'></div>
        </div>
    </div>
  )
}

export default Navbar