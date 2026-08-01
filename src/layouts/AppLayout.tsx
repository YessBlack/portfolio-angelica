import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main className='flex-1 text-slate-900 dark:bg-[#0B0E17]/92 dark:text-[#E5E7EB]'>
        <div className='mx-auto grid max-w-7xl grid-cols-4 gap-4 px-4 sm:grid-cols-8 sm:gap-6 sm:px-6 lg:grid-cols-12 lg:px-8'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
