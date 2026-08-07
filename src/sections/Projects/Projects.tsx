import { ProjectCard, type ProjectItem } from '@/sections/Projects/components/ProjectCard'
import { useTranslation } from 'react-i18next'

export const Projects = () => {
  const { t } = useTranslation()

  const projects: ProjectItem[] = [
    {
      title: 'Friticos Colombia',
      description: t('Landing page desarrollada en 8 horas durante una hackathon, enfocada en conversión rápida y presentación de un negocio de comida típica colombiana.'),
      image: 'src/assets/img/friticos-colombia.png',
      category: t('Hackathon'),
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/YessBlack/Hackaton1_FriticosColombia',
      liveUrl: 'https://yessblack.github.io/Hackaton1_FriticosColombia/',
      featured: true
    },
    {
      title: 'YouTube Clone',
      description: t('Clon funcional de YouTube construido para practicar consumo de APIs externas, reproducción de video y manejo de listas de resultados con paginación.'),
      image: 'src/assets/img/youtube-clone.png',
      category: t('Clon / Práctica'),
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/YessBlack/Clon-de-YouTube',
      liveUrl: 'https://https-github-com-yess-black-curso-ed-team-clon-de-you-tube.vercel.app/'
    },
    {
      title: t('Kadosh - Sistema de Inventario y POS'),
      description: t('Sistema de punto de venta e inventario en desarrollo, con control de stock en tiempo real, registro de ventas y reportes.'),
      image: 'src/assets/img/inventario-pos.png',
      category: 'En desarrollo',
      tags: ['React', 'Shadcn', 'SQLite', 'TypeScript', 'Node.js'],
      githubUrl: 'https://github.com/YessBlack/kadosh'
    },
    {
      title: 'Reserve One',
      description: t('Sistema de reserva de clases para el Club Deportivo Lan Hua, escuela de artes marciales chinas en Medellín especializada en Kung Fu tradicional (Mizong Luohan) y Wushu competitivo. Frontend en HTML, CSS y JavaScript, con backend en Java y Spring Boot.'),
      image: 'src/assets/img/reserve-one.png',
      category: 'En desarrollo',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Spring Boot'],
      githubUrl: 'https://github.com/YessBlack/reserve-one-5'
    },
    {
      title: 'Kairos App',
      description: t('MVP de gestión de tareas con landing page, autenticación de usuarios, dashboard personal y configuración de perfil. Permite crear, organizar y eliminar tareas para llevar un seguimiento claro del día a día. Frontend en HTML, CSS y JavaScript, con backend en Java y Spring Boot.'),
      image: 'src/assets/img/inventario-pos.png',
      category: 'En desarrollo',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Spring Boot'],
      githubUrl: 'https://github.com/YessBlack/Kairos-Planner'
    }
  ]

  return (
    <section id='proyectos' className='col-span-full rounded-lg py-15 text-center flex flex-col gap-10 dark:bg-red-900/40'>
      <div className='mx-auto max-w-2xl text-center flex flex-col gap-10'>
        <h2 className='font-bold text-3xl text-violet-500'>{t('Proyectos')}</h2>
        <p className='leading-relaxed'>{t('Proyectos que reflejan cómo pienso y construyo: desde hackathons resueltas contrarreloj hasta sistemas completos en desarrollo. En todos, la prioridad es la misma — código sólido y una experiencia que se sienta simple para quien la usa.')}</p>
      </div>

      <div className='grid grid-cols-1 gap-6 mt-3 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}
