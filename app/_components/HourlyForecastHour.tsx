import React from 'react'
import { HourlyData } from '../_types/types'

type Props = {
  index: number,
  data: HourlyData,
}

export default function HourlyForecastHour({index, data}: Props) {
  const hour = new Date(data.time[index])
  return (
    <div>
      <div>{hour.getHours()}</div>
      <div>{data.weather_code[index]}</div>
      <div>{data.temperature_2m[index]}</div>
    </div>
  )
}
