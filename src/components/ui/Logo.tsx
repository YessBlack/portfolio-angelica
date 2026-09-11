import { Link as ScrollLink } from 'react-scroll'

export const Logo = () => {
  return (
    <ScrollLink
      to='inicio'
      smooth={true}
      duration={500}
      offset={-80}
      className='flex cursor-pointer items-center gap-2'
    >
      <span
        className='flex items-center gap-2 text-base tracking-normal text-slate-800 dark:text-slate-100'
        aria-label='ys terminal yessblack.dev'
      >
        <span className='flex h-7 w-7 items-center justify-center rounded-full bg-black p-1 font-bold text-white'>
          ys
        </span>
        <span className='font-semibold'> yessblack<span className='text-violet-600 dark:text-violet-400'>.dev</span></span>
      </span>
    </ScrollLink>
  )
}
