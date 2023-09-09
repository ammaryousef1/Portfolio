'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

const Toggle = () => {
  const {theme , setTheme} = useTheme()
  console.log(theme)
  return (
    <button className='bg-gray-50 flex p-1 rounded-full dark:bg-gray-900 border-[3px] border-yellow' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light' )}>
      <BsMoon   className='h-6 w-6 mr-[10px]  text-black'/> <BsSun className='h-6 w-6 text-yellow' />
       { theme === 'light' ? (
       <div   className='absolute left-[150px]  top-[26px] h-[30px] w-[30px] bg-yellow rounded-full'>

       </div>
       ): (
       <div
       className='absolute left-[183px] top-[26px] h-[30px] w-[30px] bg-yellow rounded-full'>

       </div>
       )}

    </button>
  )
}

export default Toggle