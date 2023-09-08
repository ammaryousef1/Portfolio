'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
const RecentProjects = ({item}) => {
  const [toggle , setToggle] = useState(false)
  return (
    <div className=''>
        <div  onClick={() => setToggle(true)} className='w-96'>
        <Image  style={{ boxShadow: '1px 1px 10px 1px black'}} className=' rounded-2xl' src={item.image} alt='' />
        </div>
        {
          toggle ? (
          <div  className=' bg-backgroundshadow flex justify-center items-center fixed h-[100%] left-0 top-0 fl w-[100%]'>
            <div  className='relative p-9 bg-white rounded-xl  '> 
             <div className='flex'>
                <Image style={{boxShadow: '1px 0px 10px 1px black'}}  className='w-[400px] rounded-xl' src={item.image} alt='' />
                <div className='absolute left-[445px] top-5'>
                <AiOutlineClose onClick={()=> setToggle(false)} />
                </div>
              </div>
              <div className='text-black font-medium text-[18px] mt-5'>
                  <h1 className='mt-2'>Name:{item.title}</h1>
                  <h1 className='mt-2'>GitHub: <a href={item.githubURL} target='_blank'>GitHub</a></h1>
                  <h1 className='mt-2'>FrameWork: {item.frameWork}</h1>
                  <h1 className='mt-2'>Language:{item.language}</h1>
                  <h1 className='mt-2'>Style:{item.style}</h1>
                  <h1 className='mt-2'>Database:{item.database}</h1>
              </div>
            </div>
          </div>
          ) : null
        }
    </div>
  )
}

export default RecentProjects