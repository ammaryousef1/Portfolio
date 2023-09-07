import Image from 'next/image'
import React from 'react'

const FloatingDiv = ({image , title , title1}) => {
  return (
    <div className='bg-white  justify-center items-center rounded-2xl flex w-[200px] h-[100px] gap-2 '>
        <Image className='w-[50px] h-[50px]' src={image} alt='' />
        <div className=''>
            <h1>{title}</h1>
            <h1>{title1}</h1>
        </div>
    </div>
  )
}

export default FloatingDiv