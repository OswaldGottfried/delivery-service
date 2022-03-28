import { Card } from '../Card/Card'
import { CalculateCost } from './DeliveryBlock/DeliveryBlock'

type Props = {
  className?: string
}

export const DeliveryForm: React.FC<Props> = ({ className = '' }) => (
  <Card className={className}>
    <CalculateCost />
  </Card>
)
