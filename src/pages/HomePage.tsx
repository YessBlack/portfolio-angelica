import { Hero } from '@/sections/Hero/Hero'
import { Experience } from '@/sections/Experience/Experience'
import { Projects } from '@/sections/Projects/Projects'
import { Contact } from '@/sections/Contact/Contact'
import { About } from '@/sections/About/About'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
