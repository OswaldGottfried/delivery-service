import { getTowns } from '../../../api/getTowns'
import { RouteType } from '../../../services/graph/graph/graph'

export type Props = {
  route: RouteType<string>
  deliveryFunc: 'getDeliveryCost' | 'getCountOfRoutes'
  text: string
}

export const ResultBlock: React.FC<Props> = ({ route, text, deliveryFunc }) => {
  let result

  if (route[0] && route[1]) {
    result = getTowns()[deliveryFunc](route)
  }

  const isValidForm = !route.some((item) => !item)
  const pathString = route.join('->')

  return (
    <p>{isValidForm ? `${text} ${pathString} is ${result}` : 'Choose route'}</p>
  )
}
