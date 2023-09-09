import React from 'react'
import './Navbar.scss'
import Toggle from '../Toggle'
const Navbar = () => {

  return ( 
    <div className='mx-10 n-wrapper'>
      <div className='n-left'>
      <h2 className='text-black n-name'>Ammar</h2>
        <Toggle />  
      </div>
      <div className="n-right">
        <div className='n-list'>
          <ul className='text-black'>
            <li>Home</li>
            <li>skils</li> 
            <li>projects</li> 
          </ul>
        </div>
        <button 
            className='p-3 font-semibold text-white rounded-full shadow-lg bg-yellow px-7 shadow-orange'>
            Contact
        </button>
      </div> 
    </div>
  )
}

export default Navbar