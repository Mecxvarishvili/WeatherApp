import React from 'react'
import { DailyData } from '../_types/types'
import DailyForecastDay from './DailyForecastDay'

export default function DailyForecast({data}: {data: DailyData}) {

  return (
    <div>
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
