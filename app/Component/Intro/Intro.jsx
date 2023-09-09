'use client'
import React from 'react'
import './Intro.scss'
// import linkedin from '../../../assets/image/linkedin.png'
import github from '../../assets/image/github.png'
import Vector1 from '../../assets/image/Vector1.png'
import Vector2 from '../../assets/image/Vector2.png'
import boy from '../../assets/image/boy.png'
import FloatingDiv from './FloatingDiv'
import crown from '../../assets/image/crown.png'
import thumbup from '../../assets/image/thumbup.png'
import glassesimoji from '../../assets/image/glassesimoji.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {

  return (
    <>

    <div  className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span className='text-black'>Hy ! I Am </span>
                <span className='text-yellow'>Ammar Yousef</span>
                <span className='text-gray'>Frontend Developer With level of experience in web designing and development producting the Quality work</span>
            </div>
            <button 
             className='w-32 p-3 font-semibold text-white rounded-full shadow-lg bg-yellow px-7 shadow-orange'>
                <Link href="/contact" >
                    Hire me
                </Link>
             </button>
            <div className="i-icons">
                <a href='https://github.com/ammaryousef1' target='_blank'>
                   <Image src={github} alt='' />
                </a>
                <a href='https://www.linkedin.com/in/ammar-yousef-559b51283/' target='__blank' >
                   {/* <Image src={linkedin} alt='' /> */}
                </a>
            </div>
        </div>
        <div className="i-right">
            <div className='w-[1000px]'>
               <Image className='w-[1000px]' src={Vector1} alt="" />
            </div>
            <div className='w-[1000px]'>
               <Image className='w-[1000px]' src={Vector2} alt="" />
            </div>
            <Image src={boy} alt="" />
            <motion.img
            animate={{ x:100}}
            
            transition={{type: 'tween'  ,duration: 1}}
            className='emoge'
            style={{ width: '100px' , top:'10px'}}
            src={glassesimoji}
            alt="" />

            <motion.div
             animate={{ x:-50}}
             transition={{type: 'tween'  ,duration: 1}}
             style={{top:'-4%' , left: '68%'}}
             className='floating-div'>
                <FloatingDiv   image={crown} txt1="Web" txt2="Developer" />
            </motion.div>

            <motion.div
             animate={{ x:50}}
             transition={{type: 'tween'  ,duration: 1}}
             style={{top: '25.5rem' , left: '0rem'}} 
             className='floating-div'>
                <FloatingDiv   image={thumbup} txt1="also Designing" txt2="" />
            </motion.div>
            
            <div className="blur s-blur" style={{     background: 'blue',
                top: '17rem',
                width: '11rem',
                height: '11rrem',
                top: '50px' , 
                zIndex: '-10'

                }}></div>
            <div className="blur s-blur" style={{     background: 'blue',
                top: '17rem',
                width: '11rem',
                height: '11rrem',
                left: '-9rem',
                position: 'relative',
                zIndex: '-10'}}></div>

            
        </div>
    </div>
    </>
  )
}

export default Intro