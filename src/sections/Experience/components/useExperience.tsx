import type { TimelineItem } from '@/sections/Experience/components/TimelineCard/types'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useExperience = () => {
  const { t } = useTranslation()

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

  const EYEBROW_TEXT = 'git log --graph --oneline --career'

  const items: TimelineItem[] = [
    {
      date: t('Jun 2023 — Feb 2026 | 2 años 9 meses'),
      role: t('Desarrollador Junior II'),
      company: 'Giobs SAS BIC',
      desc: t('Modernicé una plataforma SaaS migrándola a React.'),
      hash: '#f2a91c',
      head: true
    },
    {
      date: t('Abr 2018 — Jul 2018 | 4 meses'),
      role: t('Auxiliar de TI'),
      company: t('Departamento Administrativo Nacional de Estadística - DANE'),
      desc: t('Lideré el equipo de informática durante la recolección y transmisión de datos del Censo Nacional 2018.'),
      hash: '#7e2b90'
    },
    {
      date: t('Feb 2017 — Ago 2017 | 7 meses'),
      role: t('Técnica informática'),
      company: t('Colegio Julio Perez Ferrero'),
      desc: t('Apoyé el aula TIC con mantenimiento y resolución de fallas en equipos.'),
      hash: '#3c8d15'
    }
  ]

  return {
    containerRef,
    spineFillRef,
    rowRefs,
    typedLength,
    setTypedLength,
    EYEBROW_TEXT,
    items
  }

}
