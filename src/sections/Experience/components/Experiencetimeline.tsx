import { EYEBROW_TEXT, items } from '@/sections/Experience/components/constants'
import { TimelineCard } from '@/sections/Experience/components/TimelineCard/TimelineCard'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const spineFillRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLLIElement | null)[]>([])

  const [typedLength, setTypedLength] = useState(0)

  useEffect(() => {
    if (typedLength >= EYEBROW_TEXT.length) return
    const timeout = setTimeout(() => setTypedLength((l) => l + 1), 35)
    return () => clearTimeout(timeout)
  }, [typedLength])

  useEffect(() => {
    const updateSpine = () => {
      const container = containerRef.current
      const fill = spineFillRef.current
      if (!container || !fill) return

      const rect = container.getBoundingClientRect()
      const viewportH = window.innerHeight

      const start = viewportH * 0.85
      const total = rect.height + viewportH * 0.7
      const progressed = start - rect.top

      const pct = Math.max(0, Math.min(100, (progressed / total) * 100))
      fill.style.height = `${pct}%`
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSpine()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    updateSpine()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={containerRef} className='relative m-auto'>
      <motion.div
        className='mb-10 flex items-center justify-center font-mono text-[13px] text-violet-800 dark:text-violet-400'
        viewport={{ amount: 0.6 }}
        onViewportEnter={() => {
          setTypedLength(0)
        }}
      >
        <span>{EYEBROW_TEXT.slice(0, typedLength)}</span>
        <span className='ml-0.5 h-3.75 w-2 animate-pulse bg-violet-600 dark:bg-violet-400' />
      </motion.div>

      <div className='absolute left-5 top-22 bottom-0 w-0.5 bg-violet-200 dark:bg-white/10 md:left-1/2 md:-translate-x-1/2'>
        <div
          ref={spineFillRef}
          className='w-full bg-linear-to-b from-violet-600 to-violet-400'
          style={{ height: '0%' }}
        />
      </div>

      <ul className='m-0 list-none p-0 '>
        {items.map((item, index) => {
          const isLeft = index % 2 === 0

          return (
            <li
              key={item.hash}
              ref={(el) => {
                rowRefs.current[index] = el
              }}
              className='relative z-10 mb-12 grid grid-cols-[40px_1fr] items-start gap-x-4 last:mb-0 md:grid-cols-[1fr_64px_1fr] md:gap-x-7'
            >
              <motion.div
                className='col-start-1 flex flex-col items-center pt-1.5 md:col-start-2'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.35 }}
              >
                <motion.span
                  className='h-4 w-4 rounded-full border-[2.5px] dark:bg-[#0B0E17]'
                  initial={{
                    scale: 1,
                    backgroundColor: '#ffffff',
                    borderColor: '#c4b5fd'
                  }}
                  whileInView={{
                    scale: 1.1,
                    backgroundColor: '#7c3aed',
                    borderColor: '#7c3aed'
                  }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.span
                  className='mt-2 whitespace-nowrap rounded bg-violet-50 px-1 font-mono text-[11px] dark:bg-[#0B0E17]'
                  initial={{
                    color: '#c4b5fd',
                    opacity: 0.8
                  }}
                  whileInView={{
                    color: '#7c3aed',
                    opacity: 1
                  }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.hash}
                </motion.span>

                {item.head && (
                  <span className='mt-5 rounded bg-violet-100 px-1.5 py-0.5 font-mono text-[10px] text-violet-600 dark:bg-violet-500/10 dark:text-violet-300'>
                    HEAD → main
                  </span>
                )}
              </motion.div>

              <div
                className={
                  isLeft
                    ? 'col-start-2 justify-self-start md:col-start-1 md:col-end-2 md:justify-self-end'
                    : 'col-start-2 justify-self-start md:col-start-3 md:col-end-4 md:justify-self-start'
                }
              >
                <TimelineCard item={item} index={index} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
