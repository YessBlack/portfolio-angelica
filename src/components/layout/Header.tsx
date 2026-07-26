import { Logo } from '@/components/ui/Logo'
import { Nav } from '@/components/ui/Nav'

export const Header = () => {
  return (
    <header className='w-full sticky top-0 z-50'>
      <div className='mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between border rounded-4xl border-violet-100 px-5 py-3 bg-white/50 backdrop-blur-sm dark:bg-[#0B0E17]/70 shadow-xs'>
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  )
}
