import { ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import 'flag-icons/css/flag-icons.min.css'

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const LANGUAGES = [
    { code: 'es', label: t('Español'), flagClass: 'fi fi-es' },
    { code: 'en', label: t('Inglés'), flagClass: 'fi fi-us' }
  ]

  const currentLang =
    LANGUAGES.find((lng) => lng.code === i18n.language) ?? LANGUAGES[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className='relative inline-block' ref={containerRef}>
      <button
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        aria-label='Cambiar idioma / Change language'
        className='flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 transition-colors hover:border-slate-300'
      >
        <span className={`${currentLang.flagClass} rounded-sm`} style={{ fontSize: '20px' }} />
        <ChevronDown
          size={14}
          className={`text-slate-500 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <ul
          role='listbox'
          className='absolute right-0 top-[calc(100%+10px)] z-50 min-w-35 rounded-lg border border-slate-200 bg-white p-1 shadow-lg'
        >
          {LANGUAGES.map((lng) => (
            <li key={lng.code}>
              <button
                type='button'
                role='option'
                aria-selected={lng.code === currentLang.code}
                onClick={() => handleSelect(lng.code)}
                className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors hover:bg-slate-100 
                  ${lng.code === currentLang.code
                    ? 'bg-violet-50 text-violet-700'
                    : 'text-slate-900'
                  }`}
              >
                <span className={`${lng.flagClass} rounded-sm`} style={{ fontSize: '20px' }} />
                <span>{lng.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
