import { getTowns } from '../../../api/getTowns'

type Props = {
  route: string[]
}

export const ResultBlock: React.FC<Props> = ({ route }) => {
  let routeCost
  if (route[0] && route[1]) {
    routeCost = getTowns().getDeliveryCost([route[0], route[1]])
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
