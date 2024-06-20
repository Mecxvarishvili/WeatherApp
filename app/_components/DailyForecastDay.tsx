import React from 'react'
import { DailyData } from '../_types/types'
import WeekDay from './WeekDay'
import WeatherIcon from './WeatherIcon'

type Props = {
    index: number,
    data: DailyData
}

export default function DailyForecastDay({index, data }: Props) {

  return (
    <div className='grid grid-cols-3 items-center'>
        <div>{ index ? <WeekDay time={data.time[index]} /> : <div>Today</div> }</div>
        <div><WeatherIcon code={data.weather_code[index]} /></div>
        <div className="text-end" >{data.precipitation_probability_mean[index]}%</div>
    </div>
  )
}
