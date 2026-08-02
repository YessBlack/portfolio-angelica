export type BadgeColor = 'violet' | 'indigo' | 'orange'

interface BadgeProps {
  label: string
  color?: BadgeColor
}

const COLOR_STYLES: Record<BadgeColor, { badge: string; dot: string }> = {
  violet: {
    badge: 'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300',
    dot: 'bg-violet-500 dark:bg-violet-400'
  },
  indigo: {
    badge: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300',
    dot: 'bg-indigo-500 dark:bg-indigo-400'
  },
  orange: {
    badge: 'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300',
    dot: 'bg-orange-500 dark:bg-orange-400'
  }
}

export const Badge = ({ label, color = 'violet' }: BadgeProps) => {
  const styles = COLOR_STYLES[color]

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
      {label}
    </span>
  )
}
