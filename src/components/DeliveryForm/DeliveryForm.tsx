import { Card } from '../Card/Card'
import { CalculateCost } from './DeliveryBlock/DeliveryBlock'

import style from './DeliveryForm.module.css'

export const DeliveryForm: React.FC = () => (
  <>
    <Card className={style.card}>
      <CalculateCost
        title="Calculate road cost"
        resultMessage="Delivery cost for route"
        deliveryFunc="getDeliveryCost"
        multiroad
      />
    </Card>
    <Card className={style.card}>
      <CalculateCost
        title="Calculate the number of possible delivery routes"
        resultMessage="Count of routes for"
        deliveryFunc="path"
      />
    </Card>
  </>
)
