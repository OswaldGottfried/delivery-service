import { getTowns } from '../../../api/getTowns'
import { RouteType } from '../../../services/graph/graph/graph'

type Props = {
  route: RouteType<string>
}

export const ResultBlock: React.FC<Props> = ({ route }) => {
  let routeCost
  if (route[0] && route[1]) {
    routeCost = getTowns().getDeliveryCost(route)
  }

  const isValidForm = !route.some((item) => !item)
  const pathString = route.join('->')

  return (
    <p>
      {isValidForm
        ? `Delivery cost for route ${pathString} is ${routeCost}`
        : 'Choose route'}
    </p>
  )
}
