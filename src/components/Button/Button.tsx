import React from 'react'

import clsx from 'clsx'

import style from './Button.module.css'

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (e: React.MouseEvent) => void
  className?: string
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => (
  <button
    className={clsx(className, style.button)}
    onClick={onClick}
    type={type}
    {...props}
  >
    {children}
  </button>
)
