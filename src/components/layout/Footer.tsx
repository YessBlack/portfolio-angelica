import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SocialNetwork } from '@/components/ui/SocialNetwork'

export const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className='relative left-1/2 right-1/2 mx-[-50vw] w-screen border-t border-violet-100 dark:border-white/10'>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'
      >
        <p className='mb-8 text-center font-mono text-xs text-slate-400 dark:text-slate-500'>
          {t('Gracias por llegar hasta aquí')}
        </p>

        <div className='flex flex-col items-center gap-6 rounded-lg px-4 py-6 dark:bg-white/5'>
          <div className='flex flex-col items-center gap-1 text-center'>
            <span className='text-xl font-bold text-slate-900 dark:text-[#E5E7EB]'>
              Angelica Garcia
            </span>
            <span className='text-sm text-slate-500 dark:text-slate-400'>
              © {year} Angelica Garcia · {t('Hecho con')} 💜
            </span>
          </div>

          <SocialNetwork />

          <div className='h-px w-full max-w-xs bg-linear-to-r from-transparent via-violet-300 to-transparent dark:via-violet-500/40' />

          <span className='font-mono text-xs text-slate-400 dark:text-slate-500'>
            {t('Hecho con React + Tailwind')}
          </span>
        </div>
      </motion.div>
    </footer>
  )
}
