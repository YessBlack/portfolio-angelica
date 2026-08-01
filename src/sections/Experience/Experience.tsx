import { useTranslation } from 'react-i18next'

export const Experience = () => {
  const { t } = useTranslation()

  return (
    <section id='experiencia' className='h-125 col-span-full rounded-lg bg-blue-200 py-24 text-center dark:bg-blue-900/40'>
      {t('Experiencia')}
    </section>
  )
}
