import Image from 'next/image'
import React from 'react'

const SkillsCard = ({ image , title , skills}) => {
  return (
    <div className='border-[6px]  border-orangeCard shadow-lg shadow-boxShadow rounded-2xl h-full  flex flex-col justify-center items-center p-10'>
        <div>
            <Image width={100} src={image}  alt="" />
        </div>
        <h1>{title}</h1>
        <h1>{skills}</h1>
    </div>
  )
}

export default SkillsCard