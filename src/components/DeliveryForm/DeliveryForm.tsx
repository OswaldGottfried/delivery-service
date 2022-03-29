import clsx from 'clsx'
import { Card } from '../Card/Card'
import { CalculateCost } from './DeliveryBlock/DeliveryBlock'

import style from './DeliveryForm.module.css'

type Props = {
  className?: string
}

export const DeliveryForm: React.FC<Props> = ({ className = '' }) => (
  <Card className={clsx(className, style.card)}>
    <CalculateCost />
  </Card>
)
