import React from 'react'
import { HourlyData } from '../_types/types'
import WeatherIcon from './WeatherIcon'

type Props = {
  index: number,
  data: HourlyData,
}

export default function HourlyForecastHour({index, data}: Props) {
  const hour = new Date(data.time[index])

  const getTime = (date: Date) => {
    const hour = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')
    return `${hour}:${minute}`
  }

  return (
    <div>
      <div>{getTime(new Date(data.time[index]))}</div>
      <div><WeatherIcon code={data.weather_code[index]} /></div>
      <div>{data.temperature_2m[index]}°C</div>
    </div>
  )
}
