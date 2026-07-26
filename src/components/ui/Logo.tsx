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
      <span className='flex h-7 w-7 items-center justify-center rounded-full bg-black p-1 font-bold text-white'>
        ys
      </span>
      <span className='font-bold'>yessblack.dev</span>
    </ScrollLink>
  )
}
