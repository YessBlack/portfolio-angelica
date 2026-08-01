import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id='contacto' className='col-span-full h-125 rounded-lg bg-violet-500 py-24 text-center dark:bg-blue-900/40'>
      {t('Contacto')}
    </section>
  )
}
