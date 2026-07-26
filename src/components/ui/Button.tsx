import type { ReactNode } from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean,
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string,
  icon?: ReactNode
}

export const Button = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  className = '',
  icon,
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    outline: 'border border-violet-600 text-violet-600 bg-transparent hover:bg-violet-50'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
      {label}
    </button>
  )
}
