import Image from 'next/image'
import React from 'react'

const FloatingDiv = ({image , txt1 , txt2}) => {
  return (
    <div className='bg-white  justify-center items-center rounded-2xl flex w-[200px] h-[100px] gap-2 '>
        <Image className='w-[50px] h-[50px]' src={image} alt='' />
        <div className=''>
            <h1>{txt1}</h1>
            <h1>{txt2}</h1>
        </div>
    </div>
  )
}

export default FloatingDiv