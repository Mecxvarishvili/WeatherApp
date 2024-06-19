import React from 'react'
import HourlyForecastHour from './HourlyForecastHour'
import { HourlyData } from '../_types/types'

export default function HourlyForecast({ data }: {
    data: HourlyData
}) {
  return (
    <div className="rounded-3xl px-8 py-5 bg-containerBg dark:bg-darkMode-containerBg border border-containerBorder dark:border-darkMode-containerBorder rounded-lg shadow-md">
        <div>Hourly Foreacast</div>
        <div className="flex flex-wrap">
            {data.time.map((e,i) => (
                <HourlyForecastHour key={i} index={i} data={data} />
            ))}
        </div>
    </div>
  )
}
