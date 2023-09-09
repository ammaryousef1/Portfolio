"use client"
import React from 'react'
import './Navbar.scss'
import { useRouter } from 'next/navigation';

import Toggle from '../Toggle'
import Link from 'next/link';
const Navbar = () => {

  return ( 
    <div className='mx-10 n-wrapper'>
      <div className='n-left'>
      <Link href="/"><h2 className='text-black n-name'>Ammar</h2></Link>
      <Toggle />
      </div>
      <div className="n-right">
        <div className='n-list'>
          <ul className='text-black '>
            <Link  href="/"><h1 className='font-bold '>Home</h1></Link>
            <Link  href="/Skills"><h1 className='font-bold '>skills</h1></Link> 
            <Link  href="/projects"><h1 className='font-bold '>projects</h1></Link> 
          </ul>
        </div>
        <button className='p-3 font-semibold  text-white rounded-full shadow-lg bg-yellow px-7 shadow-orange'>
          <Link href="/contact">
            <h1 className='font-bold'>Contact</h1>
          </Link>
        </button>
      </div> 
    </div>
  )
}

export default Navbar