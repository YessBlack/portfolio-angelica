import { useTranslation } from 'react-i18next'

export const Projects = () => {
  const { t } = useTranslation()

  return (
    <section id='proyectos' className='h-125 col-span-full rounded-lg bg-green-400 py-24 text-center dark:bg-red-900/40'>
      {t('Proyectos')}
    </section>
  )
}
