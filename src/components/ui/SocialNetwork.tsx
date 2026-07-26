import { GithubIcon } from '@/assets/icons/GitHubIcon'
import { LinkedinIcon } from '@/assets/icons/LinkedInIcon'

export const SocialNetwork = () => {
  return (
    <div className='flex gap-2'>
      <a href='https://github.com/YessBlack'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400'
      >
        <GithubIcon size={18} />
      </a>
      <a
        href='https://linkedin.com/in/tu-usuario'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400'
      >
        <LinkedinIcon size={18} />
      </a>
    </div >
  )
}
