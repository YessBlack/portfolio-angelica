import { Button } from '@/components/ui/Button'
import { EXTERNAL_LINKS } from '@/data/links'
import { Download, FolderOpen } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { floatingIcons, roleBadges, stats } from '@/sections/Hero/constants'

export const Hero = () => {
  return (
    <section id='inicio' className='col-span-full rounded-lg py-25 dark:bg-red-900/40'>
      <div className='flex flex-col items-center gap-5 lg:flex-row justify-between'>
        {/** Columna 1 Información */}
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-3'>
            <p className='w-20 h-px bg-slate-700'></p>
            <p>COLOMBIA</p>
          </div>

          <div className='w-full lg:max-w-lg'>
            <h1 className='text-4xl align-baseline leading-tight font-bold sm:text-4xl lg:text-5xl'>
              Soy <span className='text-violet-500 italic'>Angelica García</span>,<br />
              Desarrolladora de Software
            </h1>
          </div>

          <p className='w-full lg:max-w-xl'>
            Ingeniera de Sistemas con enfasis en desarrollado de software con más de 3 años de experiencia creando aplicaciones web. Especializada en JavaScript, TypeScript y React, con experiencia en Node.js, Firebase, migraciones tecnológicas y desarrollo de productos digitales escalables.            </p>

          <div className='flex gap-3'>
            <ScrollLink to='proyectos' smooth={true} duration={500} offset={-80}>
              <Button label='Ver Proyectos' variant='primary' icon={<FolderOpen size={16} />} />
            </ScrollLink>

            <Button
              label='Descargar CV'
              variant='secondary'
              icon={<Download size={16} />}
              onClick={() => window.open(EXTERNAL_LINKS.cv, '_blank')}
            />
          </div>
        </div>

        {/** Columna 2 Image */}
        <div className='hidden relative h-120 w-100 items-center justify-center lg:flex'>

          {floatingIcons.map((item) => (
            <motion.div
              key={item.id}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
              className={`absolute z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md ${item.position}`}
            >
              <img src={item.icon} alt={item.alt} className='h-6 w-6' />
            </motion.div>
          ))}

          {roleBadges.map((badge) => (
            <div
              key={badge.id}
              className={`absolute z-40 border border-violet-200 rounded-2xl bg-violet-100 px-5 py-2 dark:bg-violet-900/30 ${badge.position}`}
            >
              <span className='text-sm font-medium text-slate-800 dark:text-slate-200'>
                {badge.label}
              </span>
            </div>
          ))}

          <motion.div
            className='absolute top-1/2 z-0 h-170 w-170 -translate-x-1/2 -translate-y-1/2'
            style={{
              left: '40%',
              background: 'radial-gradient(circle at center, rgba(139,92,246,0.65) 0%, rgba(139,92,246,0.3) 40%, rgba(255,255,255,0) 70%)'
            }}
            animate={{
              borderRadius: [
                '68% 32% 65% 35% / 43% 45% 55% 57%',
                '45% 55% 40% 60% / 60% 40% 60% 40%',
                '68% 32% 65% 35% / 43% 45% 55% 57%'
              ],
              scale: [1, 0.94, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          <div className='absolute inset-0 z-10 rounded-3xl bg-violet-50/80' />

          <div className='absolute inset-0 z-20 flex items-center justify-center'>
            <div className='h-100 w-80 -rotate-5 rounded-3xl bg-violet-100' />
          </div>

          <div className='absolute inset-0 z-30 flex items-center justify-center'>
            <img
              className='w-60 object-cover'
              style={{
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)'
              }}
              src='src/assets/img/profile.png'
              alt='Profile'
            />
          </div>
        </div>
      </div>

      <div className='mt-5 flex gap-8 border-t border-slate-200 pt-6 dark:border-slate-800 lg:w-md'>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className='text-2xl font-bold text-violet-500 dark:text-violet-400'>{stat.value}</p>
            <p className='text-sm text-slate-500 dark:text-slate-400'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
