import Image from 'next/image'
import React from 'react'
import CV from './I am a passionate and skiled Software Developer specializing in Web development with a strong dedication to quality.jpg'
const page = () => {
  return (
    <div className='flex items-center justify-center'>
        <Image width={1000} height={1000} src={CV} alt='' />
    </div>
  )
}

export default page