import React from 'react'
import HourlyForecastHour from './HourlyForecastHour'
import { HourlyData } from '../_types/types'

export default function HourlyForecast({ data }: {
    data: HourlyData
}) {
  return (
    <div>
        <div>Hourly Foreacast</div>
        <div className="flex flex-wrap">
            {data.time.map((e,i) => (
                <HourlyForecastHour key={i} index={i} data={data} />
            ))}
        </div>
    </div>
  )
}
