import typeScriptIcon from '@/assets/icons/typescript.svg'
import javaIcon from '@/assets/icons/java.svg'
import reactIcon from '@/assets/icons/react.svg'
import nodeIcon from '@/assets/icons/node.svg'
import javascriptIcon from '@/assets/icons/javascript.svg'
import spring from '@/assets/icons/spring.svg'
import db from '@/assets/icons/db.svg'
import postgresql from '@/assets/icons/postgresql.svg'

export const floatingIcons = [
  { id: 'ts', icon: typeScriptIcon, alt: 'TypeScript', position: 'left-10 -top-4', delay: 0 },
  { id: 'java', icon: javaIcon, alt: 'Java', position: 'right-20 top-2', delay: 0.4 },
  { id: 'react', icon: reactIcon, alt: 'React', position: '-left-8 top-44', delay: 0.8 },
  { id: 'node', icon: nodeIcon, alt: 'Node.js', position: '-left-4 top-90', delay: 1.2 },
  { id: 'js', icon: javascriptIcon, alt: 'JavaScript', position: '-right-4 top-72', delay: 0.6 },
  { id: 'spring', icon: spring, alt: 'Spring', position: 'left-1/2 -top-8', delay: 1.5 },
  { id: 'db', icon: db, alt: 'Database', position: 'right-2 top-44', delay: 1.8 },
  { id: 'postgresql', icon: postgresql, alt: 'PostgreSQL', position: 'left-1 top-72', delay: 2.1 }
]

export const roleBadges = [
  { id: 'backend', label: 'Backend Developer', position: 'right-0 top-24' },
  { id: 'frontend', label: 'Frontend Developer', position: '-left-25 bottom-45' },
  { id: 'software', label: 'Software Developer', position: 'bottom-5 left-1/2 -translate-x-1/2' }
]
