import type { TimelineItem } from '@/sections/Experience/components/TimelineCard/types'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface TimelineCard {
  item: TimelineItem;
}

export const TimelineCard = ({ item }: TimelineCard) => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className='md:-translate-y-12 group w-full min-w-0 max-w-sm rounded-2xl border border-violet-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5'
    >
      <span className='mb-1 block font-mono text-xs text-slate-500 dark:text-slate-400'>{t(item.date)}</span>
      <h3 className='mb-0.5 text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-violet-700 dark:text-[#E5E7EB] dark:group-hover:text-violet-300'>
        {t(item.role)}
      </h3>
      <p className='mb-3 text-sm italic text-violet-600 dark:text-violet-400'>{t(item.company)}</p>
      <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{t(item.desc)}</p>
    </motion.div>

  )
}
