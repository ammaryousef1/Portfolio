'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

export const Providers = ({ children }) => {
  return (
   <ThemeProvider attribute='class'>
    {children}
   </ThemeProvider>
  )
}
