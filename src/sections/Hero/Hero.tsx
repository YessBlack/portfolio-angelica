import { Button } from '@/components/ui/Button'
import profileImage from '@/assets/img/hero.svg'
import { EXTERNAL_LINKS } from '@/data/links'
import { Download, FolderOpen } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { floatingIcons } from '@/sections/Hero/constants'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  const orbitIcons = [...floatingIcons, ...floatingIcons].slice(0, 8)

  const getOrbitPosition = (index: number, total: number, radius: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2

    return {
      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
      top: `calc(50% + ${Math.sin(angle) * radius}px)`
    }
  }

  const stats = [
    { value: '+3', label: t('Años de experiencia') },
    { value: '+3', label: t('Proyectos desarrollados') },
    { value: '+15', label: t('Funcionalidades entregadas') }
  ]

  return (
    <section id='inicio' className='col-span-full rounded-lg py-25 dark:bg-red-900/40'>
      <motion.div
        className='flex flex-col items-center gap-5 lg:flex-row justify-between'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/** Columna 1 Información */}
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-3'>
            <p className='w-20 h-px bg-slate-700'></p>
            <p>{t('COLOMBIA')}</p>
          </div>

          <div className='w-full lg:max-w-lg'>
            <h1 className='text-4xl align-baseline leading-tight font-bold sm:text-4xl lg:text-5xl'>
              {t('Soy')} <span className='text-violet-500 italic'>Angelica García</span>,<br />
              {t('Desarrolladora de Software')}
            </h1>
          </div>

          <p className='w-full lg:max-w-xl'>
            {t('Ingeniera de Sistemas con enfasis en desarrollado de software con más de 3 años de experiencia creando aplicaciones web. Especializada en JavaScript, TypeScript y React, con experiencia en Node.js, Firebase, migraciones tecnológicas y desarrollo de productos digitales escalables.')}
          </p>
          <div className='flex gap-3'>
            <ScrollLink to='proyectos' smooth={true} duration={500} offset={-80}>
              <Button label={t('Ver Proyectos')} variant='primary' icon={<FolderOpen size={16} />} />
            </ScrollLink>

            <Button
              label={t('Descargar CV')}
              variant='secondary'
              icon={<Download size={16} />}
              onClick={() => window.open(EXTERNAL_LINKS.cv, '_blank')}
            />
          </div>
        </div>

        {/** Columna 2 Image */}
        <div className='hidden relative h-120 w-100 items-center justify-center lg:flex'>
          <div className='absolute inset-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,rgba(59,130,246,0.12)_38%,rgba(255,255,255,0)_72%)] blur-2xl' />

          <div className='absolute inset-0 z-40 -translate-x-10'>
            {orbitIcons.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className='absolute h-15 w-15 -translate-x-1/2 -translate-y-1/2'
                style={getOrbitPosition(index, orbitIcons.length, 232)}
              >
                <motion.div
                  className='relative flex h-full w-full items-center justify-center rounded-full border border-white/70 bg-white/15 shadow-[0_0_18px_rgba(168,85,247,0.18),0_0_28px_rgba(59,130,246,0.14)] backdrop-blur-md'
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.14 }}
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className='relative z-10 h-6 w-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]'
                  />
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            className='absolute top-1/2 z-0 h-170 w-170 -translate-x-1/2 -translate-y-1/2'
            style={{
              left: '40%',
              background: 'radial-gradient(circle at center, rgba(139,92,246,0.52) 0%, rgba(139,92,246,0.22) 40%, rgba(255,255,255,0) 73%)'
            }}
            animate={{
              borderRadius: [
                '68% 32% 65% 35% / 43% 45% 55% 57%',
                '45% 55% 40% 60% / 60% 40% 60% 40%',
                '68% 32% 65% 35% / 43% 45% 55% 57%'
              ],
              scale: [1, 0.96, 1]
            }}
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          <div className='absolute inset-0 z-10 rounded-3xl bg-violet-50/80' />

          <div className='absolute inset-0 z-30 flex items-center justify-center'>
            <img
              className='w-80 object-cover'
              style={{
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)'
              }}
              src={profileImage}
              alt='Profile'
            />
          </div>
        </div>
      </motion.div>

      <div className='mt-5 flex gap-8 border-t border-slate-200 pt-6 dark:border-slate-800 lg:w-md'>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className='text-2xl font-bold text-violet-500 dark:text-violet-400'>{stat.value}</p>
            <p className='text-sm text-slate-500 dark:text-slate-400'>{t(stat.label)}</p>
          </div>
        ))}
      </div>
    </section >
  )
}
