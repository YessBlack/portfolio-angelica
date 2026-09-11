import { ExternalLink, Code2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

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

export const ProjectCard = ({ project }: ProjectCardProps) => {
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
          width='800'
          height='600'
          loading='lazy'
          decoding='async'
          className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
        />
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

        <div className='mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400'>
          {project.tags.map((tag, index) => (
            <span key={tag} className='inline-flex max-w-full items-center'>
              {index > 0 && <span className='mr-2 shrink-0 text-violet-400/80'>•</span>}
              <span className='max-w-full whitespace-normal wrap-break-word'>{tag}</span>
            </span>
          ))}
        </div>

        <div className='mt-auto flex flex-wrap items-center gap-3 border-t border-violet-100 pt-4 dark:border-white/10'>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noreferrer'
              aria-label='Ver código'
              className='inline-flex items-center gap-2 rounded-full border border-violet-200 px-4 py-2 text-sm font-medium text-violet-700 transition-colors duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-900 dark:border-white/10 dark:text-violet-200 dark:hover:border-violet-400/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-100'
            >
              <Code2 size={16} />
              <span>Ver código</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              aria-label='Ver sitio'
              className='inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400'
            >
              <span>Ver sitio</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
