import { Mail, MapPin, Send, Zap, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/sections/Contact/components/ContactForm'

export const Contact = () => {
  const { t } = useTranslation()

  const steps = [
    {
      icon: MessageCircle,
      title: t('Escríbeme'),
      desc: t('Cuéntame sobre la vacante o el equipo por el formulario o cualquiera de mis redes.'),
      card: 'border-violet-200 bg-violet-100/50 border-l-6 dark:border-violet-500/20 dark:bg-violet-500/5',
      iconBg: 'bg-violet-300/70 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
      number: 'text-violet-500 dark:text-violet-400'
    },
    {
      icon: Zap,
      title: t('Conversamos'),
      desc: t('Coordinamos una llamada corta para conocernos y ver si encajo con lo que buscan.'),
      card: 'border-violet-200 bg-violet-100/50 border-l-6 dark:border-violet-500/20 dark:bg-violet-500/5',
      iconBg: 'bg-violet-300/70 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
      number: 'text-violet-500 dark:text-violet-400'
    },
    {
      icon: Send,
      title: t('Siguientes pasos'),
      desc: t('Te comparto mi CV, portafolio y disponibilidad para avanzar en el proceso.'),
      card: 'border-violet-200 bg-violet-100/50 border-l-6 dark:border-violet-500/20 dark:bg-violet-500/5',
      iconBg: 'bg-violet-300/70 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
      number: 'text-violet-500 dark:text-violet-400'
    }
  ]

  return (
    <section
      id='contacto'
      className='min-h-screen col-span-4 sm:col-span-8 lg:col-span-12 relative left-1/2 right-1/2 mx-[-50vw] w-screen bg-violet-50/60 py-25 bg-[radial-gradient(circle,#D7CFFF_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-[radial-gradient(circle,rgba(167,139,250,0.15)_1px,transparent_1px)] dark:bg-[#0B0E17]'
    >
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

      <motion.div
        className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16'>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className='flex flex-col gap-8'
          >
            <div className='flex flex-col gap-4'>
              <Badge label={t('Disponible para nuevas oportunidades')} color='violet' pulse />

              <h2 className='text-3xl font-bold text-slate-900 dark:text-[#E5E7EB] sm:text-4xl'>
                {t('Hablemos')}
              </h2>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                {t('Estoy buscando activamente una oportunidad para seguir creciendo como desarrolladora dentro de un equipo. Me apasiona el frontend, aunque también me muevo cómoda en backend, y en ambos casos aplico buenas prácticas de principio a fin. Si mi perfil encaja con lo que buscas, ¡conversemos!')}
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <motion.a
                href='malito:anyegar36@gmail.com'
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                target='_blank'
                className='group flex items-center gap-3'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition-colors duration-200 group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-500/10 dark:text-violet-400'>
                  <Mail size={18} />
                </span>
                <span className='text-slate-800 transition-colors duration-200 group-hover:text-violet-700 dark:text-slate-200 dark:group-hover:text-violet-300'>
                  anyegar36@gmail.com
                </span>
              </motion.a>

              <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className='group flex items-center gap-3'>
                <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition-colors duration-200 group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-500/10 dark:text-violet-400'>
                  <MapPin size={18} />
                </span>
                <span className='text-slate-800 dark:text-slate-200'>{t('Colombia')}</span>
              </motion.div>
            </div>

          </motion.div>

          <ContactForm />
        </div>
        <motion.div
          className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`border p-5 rounded-2xl flex flex-col items-center gap-3 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg sm:items-start sm:text-left ${step.card}`}
            >
              <div className='flex items-center gap-3'>
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.iconBg}`}>
                  <step.icon size={18} />
                </span>
                <span className={`font-semibold text-lg ${step.number}`}>0{index + 1}</span>
              </div>
              <h4 className='font-semibold text-slate-900 dark:text-[#E5E7EB]'>{step.title}</h4>
              <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
