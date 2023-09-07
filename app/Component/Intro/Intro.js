'use client'
import React from 'react'
import glassesimoji from '../../assets/image/glassesimoji.png'
import boy from '../../assets/image/boy.png'
import Vector1 from '../../assets/image/Vector1.png'
import Vector2 from '../../assets/image/Vector2.png'
import Image from 'next/image'
import FloatingDiv from './FloatingDiv'
import Github from '../../assets/image/github.png'
// import Linkedin from '../../assets/image/linkedin.png'
import crown from '../../assets/image/crown.png'
import { motion } from 'framer-motion'
const Intro = () => {
  return (
    <div className='mt-36 flex'>
      <div className='blur  relative '></div>
      <div>
        <h1 className='text-[55px] font-semibold text-black'>Hy! I Am</h1>
        <h1 className='text-[55px] font-semibold text-yellow'>Ammar Yousef</h1>
        <p  className='mt-3 text-[14px] font-semibold text-gray'>Frontend Developer with high level of experience in web development producting the Quality Work</p>
        <button
          className='mt-10 rounded-full bg-yellow p-3 px-7 shadow-lg shadow-orange text-white'>
          Hire me
        </button>
        <div className='flex gap-9 relative top-20'>
          <Image width={70} height={50}  src={Github} alt='' />
          {/* <Image width={70} height={50}  src={Linkedin} alt='' /> */}

        </div>
      </div>
      <div className='flex justify-between'>
        <motion.div
          animate={{ x:50}}
          transition={{type: 'tween'  ,duration: 1}}
        >
        <Image  className='w-[120px] h-[120px] relative bottom-[60px]' src={glassesimoji} alt='' />
        </motion.div>
        <div className='absolute'>
        <Image className='relative top-20px w-[700px]' src={Vector1} alt='' />
        <Image className='relative left-[110px] bottom-[500px] w-[600px]' src={Vector2} alt='' />
        <Image className='relative bottom-[1110px] left-[160px] w-[450px]' src={boy} alt='' />
        <motion.div
         animate={{ x:-50}}
         transition={{type: 'tween'  ,duration: 1}}
         style={{top:'-4%' , left: '25%' }}
         className="relative bottom-[1250px] right-[10px] ">
         <FloatingDiv  image={crown} txt1="Web" txt2="Developer" />
         <div className='blur '> </div>
        </motion.div>
        </div> 
      </div>
    </div>
  )
}

export default Intro