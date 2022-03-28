import clsx from 'clsx'
import { createElement } from 'react'
import style from './Card.module.css'

type Props = {
  className?: string
}

export const Card: React.FC<Props> = ({ className = '', children }) =>
  createElement('div', { className: clsx(className, style.card) }, children)
