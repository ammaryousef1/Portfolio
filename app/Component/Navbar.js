import React from 'react'
import Toggle from './Toggle'
const Navbar = () => {
  return (
    <div className='flex m-5 mx-5 justify-between items-center'>
        <div className='flex gap-3 items-center'>
            <h1  className='font-bold text-xl'>Ammar</h1>
            <Toggle />
        </div>
        <div className='flex items-center gap-10'>
            <ul className='flex gap-20'>
                <li className=''>Home</li>
                <li className=''>Skills</li>
                <li className=''>Projects</li>
            </ul>
            <button 
            className='rounded-full bg-yellow p-3 px-7 shadow-lg shadow-orange text-white'>
            Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar