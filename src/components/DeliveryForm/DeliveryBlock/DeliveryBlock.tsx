import { ChangeEvent, FormEvent, useState } from 'react'
import { getTowns } from '../../../api/getTowns'
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

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleClear = () => {
    setRoute(defaultState)
  }

  const routeArray = Object.values(route)

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
      ></Select>
      <Select
        label="To"
        name="end"
        value={route.end}
        onChange={onChange}
        options={towns}
      ></Select>
      <div className={style.buttons}>
        {/* TODO: implement adding new stops */}
        <Button disabled>Add route</Button>
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
