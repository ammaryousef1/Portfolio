'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const RecentProjects = ({item}) => {
  const [toggle , setToggle] = useState(false)
  return (
    <div className=''>
        <div  onClick={() => setToggle(!toggle)} className='w-96'>
        <Image  style={{ boxShadow: '1px 1px 15px 1px black'}} className=' rounded-2xl' src={item.image} alt='' />
        </div>
        {
          toggle ? (
          <div className='absolute'>
            <div className='relative'> 
              <Image src={item.image} alt='' />
            </div>
          </div>
          ) : null
        }
    </div>
  )
}

export default RecentProjects