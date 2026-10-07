import { ProjectCard, type ProjectItem } from '@/sections/Projects/components/ProjectCard'
import friticosColombiaImage from '@/assets/img/friticos-colombia-optimized.jpg'
import youtubeCloneImage from '@/assets/img/youtube-clone-optimized.jpg'
import inventarioPosImage from '@/assets/img/inventario-pos-optimized.jpg'
import kairos from '@/assets/img/kairos-optimized.jpg'
import reserveOneImage from '@/assets/img/reserve-one-optimized.jpg'
import reserveOneApiImage from '@/assets/img/reserve-one-api.png'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
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
      description: t('Recreación de la interfaz de YouTube enfocada en frontend, trabajando la estructura visual, organización y una interfaz responsiva.'),
      image: youtubeCloneImage,
      category: t('Clon / Práctica'),
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/YessBlack/Clon-de-YouTube',
      liveUrl: 'https://https-github-com-yess-black-curso-ed-team-clon-de-you-tube.vercel.app/'
    },
    {
      title: t('Sistema de Inventario y POS'),
      description: t('Kadosh es un sistema de punto de venta e inventario en desarrollo, con control de stock en tiempo real, registro de ventas y reportes.'),
      image: inventarioPosImage,
      category: t('En desarrollo'),
      tags: ['React', 'Shadcn', 'SQLite', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Express', 'PocketBase'],
      githubUrl: 'https://github.com/YessBlack/kadosh'
    },
    {
      title: 'Reserve One',
      description: t('Sistema de reservas para Club Lan Hua, escuela de artes marciales chinas en Medellín, cubriendo gestión de horarios, clases y usuarios.'),
      image: reserveOneImage,
      category: t('Completado'),
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Spring Boot'],
      githubUrl: 'https://github.com/YessBlack/reserve-one-5',
      liveUrl: 'https://reserve-one-5-6gu6.vercel.app/src/index.html'
    },
    {
      title: 'Kairos App',
      description: t('MVP de gestión de tareas con landing page, autenticación, dashboard y perfil de usuario, permitiendo crear, organizar y eliminar tareas.'),
      image: kairos,
      category: t('Completado'),
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Spring Boot'],
      githubUrl: 'https://github.com/YessBlack/Kairos-Planner',
      liveUrl: 'https://kairos-planner-drab.vercel.app/'
    },
    {
      title: 'Reserve One API',
      description: t('API para el sistema de reservas Reserve One, desarrollada con Java, Spring Boot, Hibernate, Supabase y desplegada en Render.'),
      image: reserveOneApiImage,
      category: t('Completado'),
      tags: ['Java', 'Spring Boot', 'Hibernate', 'Supabase', 'Render'],
      githubUrl: 'https://github.com/YessBlack/reserve-one-backend',
      liveUrl: 'https://reserve-one-backend.onrender.com/swagger-ui/index.html'
    }
  ]

  return (
    <section
      id='proyectos'
      className='col-span-full rounded-lg py-15 text-center flex flex-col gap-10'
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
      <a
        href='https://github.com/YessBlack'
        target='_blank'
        rel='noreferrer'
        className='mx-auto inline-flex items-center gap-2 rounded-full border border-violet-200 px-5 py-2.5 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-50 dark:border-white/10 dark:text-violet-200 dark:hover:bg-violet-500/10'
      >
        <Code2 size={16} />
        <span>{t('Ver más proyectos')}</span>
      </a>
    </section>
  )
}
