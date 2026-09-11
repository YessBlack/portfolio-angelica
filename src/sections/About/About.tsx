import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import profileImage from '@/assets/img/profile.png'

export const About = () => {
  const { t } = useTranslation()

  return (
    <section
      id='sobre-mi'
      className='col-span-full rounded-lg py-15 dark:bg-red-900/40'
    >
      <motion.div
        className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className='relative mx-auto w-full max-w-120 lg:mx-0 lg:-translate-x-2 lg:-rotate-2'>
          <div className='absolute -inset-5 rounded-4xl bg-violet-400/20 blur-3xl dark:bg-violet-600/20' />
          <div className='relative overflow-hidden rounded-4xl border border-violet-200 bg-violet-50 p-3 shadow-xl shadow-violet-200/40 dark:border-violet-400/20 dark:bg-violet-950/30 dark:shadow-violet-950/40'>
            <div className='relative aspect-5/6 overflow-hidden rounded-3xl bg-violet-100 dark:bg-violet-950/50'>
              <img
                src={profileImage}
                alt={t('Retrato de Angelica García')}
                className='h-full w-full object-cover object-center saturate-90 transition duration-700 hover:scale-105 hover:saturate-110'
              />
              <div className='pointer-events-none absolute inset-0 bg-linear-to-tr from-violet-950/35 via-transparent to-white/20' />
              <div className='pointer-events-none absolute inset-4 rounded-2xl border border-white/40' />
            </div>
            <span className='absolute bottom-7 left-7 rounded-md bg-slate-950/85 px-3 py-1.5 font-mono text-xs text-violet-200 backdrop-blur-sm'>
              {'< about-me />'}
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-5 text-left'>
          <div className='flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-500'>
            <span className='h-px w-10 bg-violet-500' />
            <span>{t('Conóceme')}</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl'>{t('Sobre mí')}</h2>
          <p className='max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300'>
            {t('Mi acercamiento a la tecnología no fue amor a primera vista: en el colegio llegué a odiar la clase de informática, hasta que un cambio de profesor me hizo ver la lógica detrás de las herramientas y ahí nació mi interés. Entré a Análisis y Desarrollo de Sistemas en el SENA sin saber programar, y terminé enamorándome de los algoritmos al descubrir el impacto real que la tecnología tiene en la vida de las personas —desde oportunidades laborales hasta reconectar con seres queridos. Eso me llevó a estudiar Ingeniería de Sistemas y luego a especializarme en frontend en el bootcamp de Laboratoria, donde aprendí a trabajar en equipo de verdad junto a personas de Perú, Argentina, Chile y México.')}
          </p>
          <p className='max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300'>
            {t('Esa base me abrió las puertas a mi primera experiencia profesional, donde participé en la migración de una plataforma SaaS de JavaScript puro a React. Tras casi tres años de aprendizaje intenso, tomé una pausa para recargar energía, y con el deseo de seguir creciendo, tuve la oportunidad de ingresar al bootcamp fullstack de Generation, donde hoy profundizo en backend para consolidar mi perfil fullstack. Lo que más disfruto del desarrollo es resolver problemas, darle estructura y sentido a un problema, y sobre todo saber que esa solución termina siendo útil para alguien más.')}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
