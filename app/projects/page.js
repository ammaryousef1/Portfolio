import React from 'react'
import ProjectPage from '../Component/ProjectPage'

const page = () => {
  return (
   <>
    <div className='my-20 '>
    <div className='blur' ></div>
         <div className='flex flex-col items-center justify-center mb-10'>
            <h1 className='text-[45px] font-semibold text-black'>Recent Projects</h1>
            <h1 className='text-[45px] font-semibold text-yellow'>Portfolio</h1>
       </div>
       <ProjectPage />
    </div>
    <div className='text-center text-black relative top-[100px] '>
       ammaryousef173@gmail.com
   </div>
   </>
  )
}

export default page