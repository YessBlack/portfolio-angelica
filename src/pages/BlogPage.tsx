import { useTranslation } from 'react-i18next'

export const BlogPage = () => {
  const { t } = useTranslation()

  return (
    <div>{t('Pagina de Blog')}</div>
  )
}
