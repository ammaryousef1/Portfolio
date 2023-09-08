import Image from 'next/image'
import Intro from './Component/Intro/Intro'
import Skills from './Component/skills/Skills'
import Projects from './Component/Projects'
import Contact from './Component/Contact/Contact'

export default function Home() {
  return (
    <div className='m-5 mx-10'>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
