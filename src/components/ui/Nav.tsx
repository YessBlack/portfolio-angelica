import { SocialNetwork } from '@/components/ui/SocialNetwork'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const links = [
  { label: 'Inicio', to: 'inicio' },
  { label: 'Experiencia', to: 'experiencia' },
  { label: 'Proyectos', to: 'proyectos' },
  { label: 'Contacto', to: 'contacto' }
]

export const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='flex items-center gap-12'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-center md:hidden'
        aria-label='Abrir menú'
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className='hidden gap-8 md:flex items-center'>
        {links.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass='!text-purple-600 dark:!text-purple-400'
            className='cursor-pointer text-sm font-medium text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400'
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>

      <div className='hidden md:flex items-center'>
        <SocialNetwork />
      </div>

      {isOpen && (
        <div className='absolute left-0 top-full mt-1 flex w-full flex-col gap-4 rounded-4xl border border-violet-100 bg-white/70 p-5 shadow-xs backdrop-blur-md md:hidden dark:border-violet-900/40 dark:bg-[#0B0E17]/70'>          {links.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setIsOpen(false)}
            activeClass='!text-purple-600 dark:!text-purple-400'
            className='cursor-pointer text-sm font-medium text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400'
          >
            {link.label}
          </ScrollLink>
        ))}
          <SocialNetwork />
        </div>
      )}
    </div>
  )
}
