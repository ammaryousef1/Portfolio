
import Navbar from './Component/Navbar/Navbar.jsx'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from  '../Context/Providers.jsx'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html className='dark' lang="en">
      <Providers>
          <body 
          className={inter.className}>
              <Navbar />
              {children} 
          </body>
      </Providers>
    </html>
  )
}
