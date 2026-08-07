import { ExternalLink, Code2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge, type BadgeColor } from '@/components/ui/Badge'
import { useTranslation } from 'react-i18next'

export interface ProjectItem {
  title: string
  description: string
  image: string
  category?: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

interface ProjectCardProps {
  project: ProjectItem
}

const TAG_COLORS: BadgeColor[] = ['violet', 'indigo', 'orange', 'emerald']

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation()
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className='group flex w-full flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-200/50 dark:border-white/10 dark:bg-white/5 dark:hover:shadow-violet-950/40'
    >
      <div className='relative h-56 w-full overflow-hidden sm:h-64'>
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
        />

        {project.featured && (
          <span className='absolute left-4 top-4 rounded-full bg-violet-100/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-800 shadow-sm backdrop-blur-sm dark:bg-orange-500/20 dark:text-orange-200'>
            {t('PROYECTO DESTACADO')}
          </span>
        )}
      </div>

      <div className='flex flex-1 flex-col gap-3 p-5 text-start'>
        {project.category && (
          <div className='flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400'>
            <Sparkles size={13} />
            {project.category}
          </div>
        )}

        <h3 className='text-2xl font-bold text-slate-900 dark:text-[#E5E7EB]'>{project.title}</h3>

        <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{project.description}</p>

        <div className='mt-1 flex flex-wrap gap-2'>
          {project.tags.map((tag, index) => (
            <Badge key={tag} label={tag} color={TAG_COLORS[index % TAG_COLORS.length]} />
          ))}
        </div>

        <div className='mt-auto flex items-center gap-3 border-t border-violet-100 pt-4 dark:border-white/10'>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noreferrer'
              aria-label='Ver código en GitHub'
              className='flex h-9 w-9 items-center justify-center rounded-full border border-violet-100 text-slate-600 transition-colors duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300'
            >
              <Code2 size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              aria-label='Ver proyecto en vivo'
              className='flex h-9 w-9 items-center justify-center rounded-full border border-violet-100 text-slate-600 transition-colors duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300'
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
