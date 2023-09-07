import React from 'react'
import DataProject from '../assets/data/dataProjects'
import Image from 'next/image'
import RecentProjects from './RecentProjects'
const ProjectPage = () => {
  return (
    <div
     style={{  width: '100%'}}
     className='flex flex-wrap items-center justify-center gap-10'>
        {
            DataProject.map((item) => (
               <RecentProjects item={item} />
            )) 
        }
    </div>
  )
}

export default ProjectPage