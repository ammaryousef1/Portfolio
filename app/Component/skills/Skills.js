'use client'
import React from 'react'
import SkillsCard from './SkillsCard'
import glasses from '../../assets/image/glasses.png'
import heartemoji from '../../assets/image/heartemoji.png'
import humble from '../../assets/image/humble (1).png'
import './Skills.scss'
const Skills = () => {
  return (
    <div className='relative flex skills top-96'>
        <div className='skills-title'>
            <h1 className='text-[55px] mb-0 font-semibold text-black' >My Awesome</h1>
            <h1 className='text-[55px]  font-semibold text-yellow'>services</h1>
            <p  className='text-[14px] mb-6 font-semibold text-gray w-[500px]'>
                Frontend Developer With level of experience in web designing and development producting the Quality work
            </p>
            <button  className='p-3 px-20 text-white rounded-full shadow-lg bg-yellow shadow-orange'>    
            CV                    
            </button>
        </div>

        <div className='flex flex-1 SkillsCards absloute '>
            <div className='SkillsCard-1 relative left-[28rem]'>
                <SkillsCard image={glasses} skills="Html , CSS , Javascript , React , Nextjs" title='Developer'  />
            </div>
            <div className='blur'></div>
            <div className='SkillsCard-2 relative right-[13rem] top-[12rem]'>
                <SkillsCard image={heartemoji} skills="Html , CSS , Javascript , React , Nextjs" title='Design' />
            </div>

            <div className='SkillsCard-3 relative  right-[10rem] top-[23rem]'>
                <SkillsCard image={humble} skills="Html , CSS , Javascript , React , Nextjs" title='React' />
            </div>

        </div>
    </div>
  )
}

export default Skills