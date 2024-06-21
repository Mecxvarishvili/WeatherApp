import React from 'react'
import TodayForecastHour from './TodayForecastHour'
import { HourlyData } from '../_types/types'

export default function TodayForecast({ data }: {
    data: HourlyData
}) {
  const hours: number[] = [3, 6, 9, 12, 15, 18, 21, ]
  
  return (
    <div className="rounded-3xl px-8 py-5 bg-containerBg dark:bg-darkMode-containerBg border border-containerBorder dark:border-darkMode-containerBorder shadow-md">
        <div>Today's Foreacast</div>
        <div className="flex gap-3 text-center justify-between mt-4">
            {hours.map((e) => (
                <TodayForecastHour key={e} index={e} data={data} />
            ))}
        </div>
    </div>
  )
}
