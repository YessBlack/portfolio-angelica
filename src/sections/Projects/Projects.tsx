import { ProjectCard, type ProjectItem } from '@/sections/Projects/components/ProjectCard'
import friticosColombiaImage from '@/assets/img/friticos-colombia.png'
import youtubeCloneImage from '@/assets/img/youtube-clone.png'
import inventarioPosImage from '@/assets/img/inventario-pos.png'
import kairos from '@/assets/img/kairos.png'
import reserveOneImage from '@/assets/img/reserve-one.png'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const Projects = () => {
  const { t } = useTranslation()

  const projects: ProjectItem[] = [
    {
      title: 'Friticos Colombia',
      description: t('Landing page desarrollada en 8 horas durante hackathon, enfocada en conversión rápida para negocio de comida típica colombiana.'),
      image: friticosColombiaImage,
      category: t('Hackathon'),
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/YessBlack/Hackaton1_FriticosColombia',
      liveUrl: 'https://hackaton1-friticos-colombia.vercel.app/',
      featured: true
    },
    {
      title: 'YouTube Clone',
      description: t('Recreación de la interfaz de YouTube enfocada en frontend, trabajando la estructura visual, organización del diseño y una interfaz moderna y responsive.'),
      image: youtubeCloneImage,
      category: t('Clon / Práctica'),
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/YessBlack/Clon-de-YouTube',
      liveUrl: 'https://https-github-com-yess-black-curso-ed-team-clon-de-you-tube.vercel.app/'
    },
    {
      title: t('Kadosh - Sistema de Inventario y POS'),
      description: t('Sistema de punto de venta e inventario en desarrollo, con control de stock en tiempo real, registro de ventas y reportes.'),
      image: inventarioPosImage,
      category: t('En desarrollo'),
      tags: ['React', 'Shadcn', 'SQLite', 'TypeScript', 'Node.js'],
      githubUrl: 'https://github.com/YessBlack/kadosh'
    },
    {
      title: 'Reserve One',
      description: t('Sistema de reservas para Club Lan Hua, escuela de artes marciales chinas en Medellín, cubriendo gestión de horarios, clases y usuarios.'),
      image: reserveOneImage,
      category: t('En desarrollo'),
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Spring Boot'],
      githubUrl: 'https://github.com/YessBlack/reserve-one-5'
    },
    {
      title: 'Kairos App',
      description: t('MVP de gestión de tareas con landing page, autenticación, dashboard y perfil de usuario, permitiendo crear, organizar y eliminar tareas.'),
      image: kairos,
      category: t('En desarrollo'),
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Spring Boot'],
      githubUrl: 'https://github.com/YessBlack/Kairos-Planner'
    }
  ]

  return (
    <section
      id='proyectos'
      className='col-span-full rounded-lg py-15 text-center flex flex-col gap-10 dark:bg-red-900/40'
    >
      <motion.div
        className='mx-auto max-w-2xl text-center flex flex-col gap-10'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className='font-bold text-3xl text-violet-500'>{t('Proyectos')}</h2>
        <p className='leading-relaxed'>{t('Proyectos que reflejan cómo pienso y construyo: desde hackathons resueltas contrarreloj hasta sistemas completos en desarrollo. En todos, la prioridad es la misma — código sólido y una experiencia que se sienta simple para quien la usa.')}</p>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 gap-6 mt-3 sm:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </motion.div>
    </section>
  )
}
