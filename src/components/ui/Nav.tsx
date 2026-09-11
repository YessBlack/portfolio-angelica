import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { SocialNetwork } from '@/components/ui/SocialNetwork'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Link as ScrollLink } from 'react-scroll'

export const Nav = () => {
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const links = [
    { label: t('Inicio'), to: 'inicio' },
    { label: t('Sobre mí'), to: 'sobre-mi' },
    { label: t('Experiencia'), to: 'experiencia' },
    { label: t('Proyectos'), to: 'proyectos' },
    { label: t('Contacto'), to: 'contacto' }
  ]

  const dropdown = (
    <div className='fixed left-0 right-0 top-18 z-40 mx-4 flex flex-col gap-4 rounded-4xl border border-violet-100 bg-white/50 backdrop-blur-sm p-5 shadow-lg md:hidden dark:border-violet-900/40 dark:bg-[#0B0E17]/70'>
      {links.map((link) => (
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

      <div className='flex items-center justify-between border-t border-violet-100 pt-4 dark:border-violet-900/40'>
        <SocialNetwork />
        <div className='flex items-center gap-3'>
          <LanguageSwitcher />
          {/* <ThemeSwitcher /> */}
        </div>
      </div>
    </div>
  )

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

      <div className='hidden md:flex items-center gap-5'>
        <SocialNetwork withoutBg />
        <LanguageSwitcher />
      </div>

      {isOpen && createPortal(dropdown, document.body)}
    </div>
  )
}
