import { GithubIcon } from '@/assets/icons/GitHubIcon'
import { LinkedinIcon } from '@/assets/icons/LinkedInIcon'
import { AtSign } from 'lucide-react'
import { motion } from 'framer-motion'

interface SocialNetworkProps {
  withoutBg?: boolean
}

export const SocialNetwork = ({ withoutBg = false }: SocialNetworkProps) => {
  const SOCIAL_LINKS = [
    {
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/angelica-yessenia-garcia-osorio/',
      label: 'LinkedIn',
      style: `text-violet-700 ${!withoutBg && 'bg-violet-100border border-violet-200 shadow-sm'} dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20`
    },
    {
      icon: GithubIcon,
      href: 'https://github.com/YessBlack',
      label: 'GitHub',
      style: `text-fuchsia-700 ${!withoutBg && 'bg-fuchsia-100 border border-fuchsia-200 shadow-sm'} dark:bg-fuchsia-500/10 dark:text-fuchsia-300 dark:border-fuchsia-500/20`
    },
    {
      icon: AtSign,
      href: 'mailto:angelica.garcia@email.com',
      label: 'Email',
      style: `text-indigo-700 ${!withoutBg && 'bg-indigo-100 border-indigo-200 shadow-sm'} dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20`
    }
  ]

  return (
    <div className='flex items-center gap-1'>
      {SOCIAL_LINKS.map(({ icon: Icon, href, label, style }) => (
        <motion.a
          key={label}
          href={href}
          target='_blank'
          rel='noreferrer'
          aria-label={label}
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`flex h-9 w-9 items-center justify-center rounded-full ${style}`}
        >
          <Icon size={16} />
        </motion.a>
      ))}
    </div>

  )
}
