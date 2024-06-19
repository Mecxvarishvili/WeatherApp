import React from 'react'
import { DailyData } from '../_types/types'
import DailyForecastDay from './DailyForecastDay'

export default function DailyForecast({data}: {data: DailyData}) {

  return (
    <div className="rounded-3xl px-8 py-5 bg-containerBg dark:bg-darkMode-containerBg border border-containerBorder dark:border-darkMode-containerBorder rounded-lg shadow-md">
      <div>Seven day forecast</div>
      {
        data.time.map((e, i) => (
            <DailyForecastDay key={i} index={i} data={data}/>
          )
        )
      }
    </div>
  )
}
