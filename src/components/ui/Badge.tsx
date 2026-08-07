export type BadgeColor = 'violet' | 'indigo' | 'orange' | 'emerald'

interface BadgeProps {
  label: string
  color?: BadgeColor
  pulse?: boolean
}

const COLOR_STYLES: Record<BadgeColor, { badge: string; border: string; dot: string }> = {
  violet: {
    badge: 'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300',
    border: '',
    dot: 'bg-violet-500 dark:bg-violet-400'
  },
  indigo: {
    badge: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300',
    border: '',
    dot: 'bg-indigo-500 dark:bg-indigo-400'
  },
  orange: {
    badge: 'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300',
    border: '',
    dot: 'bg-orange-500 dark:bg-orange-400'
  },
  emerald: {
    badge: 'border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300',
    border: '',
    dot: 'bg-emerald-500'
  }
}

export const Badge = ({ label, color = 'violet', pulse = false }: BadgeProps) => {
  const styles = COLOR_STYLES[color]

  return (
    <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
      {pulse ? (
        <span className='relative flex h-2 w-2'>
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${styles.dot}`} />
          <span className={`relative inline-flex h-2 w-2 rounded-full ${styles.dot}`} />
        </span>
      ) : (
        <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
      )}
      {label}
    </span>
  )
}
