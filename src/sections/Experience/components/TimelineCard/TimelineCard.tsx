import type { TimelineItem } from '@/sections/Experience/components/TimelineCard/types'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface TimelineCard {
  item: TimelineItem;
  index: number;
}

const PALETTES = [
  {
    tint: 'bg-violet-100/50 dark:bg-violet-500/5',
    border: 'border-violet-200 border-l-6 dark:border-violet-500/20 dark:bg-violet-500/5',
    company: 'text-violet-600 dark:text-violet-400',
    hoverTitle: 'group-hover:text-violet-700 dark:group-hover:text-violet-300'
  }
]

export const TimelineCard = ({ item, index }: TimelineCard) => {
  const { t } = useTranslation()
  const palette = PALETTES[index % PALETTES.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`group border-l-7 w-full min-w-0 max-w-sm overflow-hidden rounded-2xl border ${palette.border} ${palette.tint} shadow-sm md:-translate-y-12 dark:bg-white/5`}
    >
      <div className='p-5'>
        <span className='mb-1 block font-mono text-xs text-slate-500 dark:text-slate-400'>{t(item.date)}</span>
        <h3 className={`mb-0.5 text-lg font-semibold text-slate-900 transition-colors duration-200 ${palette.hoverTitle} dark:text-[#E5E7EB]`}>
          {t(item.role)}
        </h3>
        <p className={`mb-3 text-sm italic ${palette.company}`}>{t(item.company)}</p>
        <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{t(item.desc)}</p>
      </div>
    </motion.div>
  )
}
