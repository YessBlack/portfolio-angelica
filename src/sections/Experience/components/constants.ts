import i18n from '@/i18n'
import type { TimelineItem } from '@/sections/Experience/components/TimelineCard/types'

export const EYEBROW_TEXT = 'git log --graph --oneline --career'

export const items: TimelineItem[] = [
  {
    date: i18n.t('Jun 2023 — Feb 2026 | 2 años 9 meses'),
    role: i18n.t('Desarrollador Junior II'),
    company: 'Giobs SAS Bic.',
    desc: i18n.t('Participé en la modernización de una plataforma empresarial migrando JavaScript a React, colaboré en la optimización de procesos de desarrollo y despliegue, y trabajé junto a clientes, QA y desarrollo para definir e implementar nuevas funcionalidades.'),
    hash: '#f2a91c',
    head: true
  },
  {
    date: i18n.t('Abr 2018 — Jul 2018 | 4 meses'),
    role: i18n.t('Auxiliar de TI'),
    company: i18n.t('Departamento Administrativo Nacional de Estadística - DANE'),
    desc: i18n.t('Censo Nacional de Población y Vivienda 2018, líder del equipo del área de informática, encargada de configurar y supervisar la recolección y trasmisión de información obtenida por el equipo de censistas'),
    hash: '#7e2b90'
  },
  {
    date: i18n.t('Feb 2017 — Ago 2017 | 7 meses'),
    role: i18n.t('Técnica informática'),
    company: i18n.t('Colegio Julio Perez Ferrero'),
    desc: i18n.t('Practica en mantenimiento de equipos de computo donde aprendí a resolver problemas técnicos, realizar informes, inventario y apoyar en el aula TIC trabajando en equipo con educadores de la institución'),
    hash: '#3c8d15'
  }
]
