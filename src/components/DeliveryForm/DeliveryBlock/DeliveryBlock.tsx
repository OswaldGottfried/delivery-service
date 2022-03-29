import { ChangeEvent, FormEvent, useState } from 'react'
import { getTowns } from '../../../api/getTowns'
import { RouteType } from '../../../services/graph/graph/graph'
import { Button } from '../../Button/Button'
import { Card } from '../../Card/Card'
import { ErrorBoundary } from '../../ErrorBoundary/ErrorBoundary'
import { Select } from '../../Select/Select'
import { ResultBlock } from '../ResultBlock/ResultBlock'

import style from './DeliveryBlock.module.css'

export const CalculateCost = () => {
  const towns = getTowns().nodeKeys
  const defaultState = { start: '', end: '' }
  const [route, setRoute] = useState(defaultState)
  const [stops, setStops] = useState<string[]>([])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleClear = () => {
    setRoute(defaultState)
    setStops([])
  }

  const routeStops = Object.keys(route).filter(
    (item) => item !== 'start' && item !== 'end',
  )
  const stopsValue = routeStops.map((item) => route[item as keyof typeof route])
  // @ts-ignore
  const routeArray: RouteType<string> = [route.start, ...stopsValue, route.end]

  const addRoute = () => {
    setStops((prevState) => [...prevState, `stop ${stops.length + 1}`])
  }

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const updatedItem = {
      [event.currentTarget?.name]: event.currentTarget.value,
    }
    setRoute((prevState) => ({
      ...prevState,
      ...updatedItem,
    }))
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className={style.title}>Calculate road cost</h2>
      <Select
        label="From"
        name="start"
        value={route.start}
        onChange={onChange}
        options={towns}
      />
      {stops.map((stop) => (
        <Select
          key={stop}
          label="Stop"
          name={String(stop)}
          value={route[stop as keyof typeof route]}
          onChange={onChange}
          options={towns}
        />
      ))}
      <Select
        label="To"
        name="end"
        value={route.end}
        onChange={onChange}
        options={towns}
      />
      <div className={style.buttons}>
        <Button onClick={addRoute}>Add route</Button>
        <Button onClick={handleClear}>Clear</Button>

        <Card className={style.result}>
          <ErrorBoundary key={routeArray.join('')}>
            <ResultBlock route={routeArray} />
          </ErrorBoundary>
        </Card>
      </div>
    </form>
  )
}
