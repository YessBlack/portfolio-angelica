import { GithubIcon } from '@/assets/icons/GitHubIcon'
import { LinkedinIcon } from '@/assets/icons/LinkedInIcon'

export const SocialNetwork = () => {
  return (
    <div className='flex items-center gap-3'>
      <a href='https://github.com/YessBlack'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-700 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-purple-400'
      >
        <GithubIcon size={18} />
      </a>
      <a
        href='https://www.linkedin.com/in/angelica-yessenia-garcia-osorio/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-700 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-purple-400'
      >
        <LinkedinIcon size={18} />
      </a>
    </div >
  )
}
