import React from 'react'
import RecentProjects from './RecentProjects'
import ProjectPage from './ProjectPage'

const Projects = () => {
  return (
    <div className='relative top-[900px]  '>
       <div className='flex flex-col items-center justify-center mb-10'>
            <h1 className='text-[45px] font-semibold text-black'>Recent Projects</h1>
            <h1 className='text-[45px] font-semibold text-yellow'>Portfolio</h1>
       </div>
       <ProjectPage />
    </div>
  )
}

export default Projects