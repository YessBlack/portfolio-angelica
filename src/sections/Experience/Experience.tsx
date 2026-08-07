import { ExperienceTimeline } from '@/sections/Experience/components/Experiencetimeline'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const Experience = () => {
  const { t } = useTranslation()

  return (
    <section id='experiencia' className='col-span-4 sm:col-span-8 lg:col-span-12 relative left-1/2 right-1/2 mx-[-50vw] w-screen bg-violet-50/60 py-16 bg-[radial-gradient(circle,#D7CFFF_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-[radial-gradient(circle,rgba(167,139,250,0.15)_1px,transparent_1px)] dark:bg-[#0B0E17]'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{ y: [0, 24, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-700/25'
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl dark:bg-indigo-700/20'
        />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10'>
        <div className='mx-auto max-w-2xl text-center flex flex-col gap-10'>
          <h2 className='font-bold text-3xl text-violet-500'>{t('Experiencia Profesional')}</h2>
          <p className='leading-relaxed'>{t('Más de 3 años en el desarrollo web, pasando por distintos roles y responsabilidades. Cada proyecto sumó algo distinto: mejores prácticas, arquitectura escalable y un claro objetivo por la calidad.')}</p>
        </div>
        <ExperienceTimeline />
      </div>
    </section>
  )
}
