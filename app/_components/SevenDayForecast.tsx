import React from 'react'
import { DailyData } from '../_types/types'
import SevenDayForecastDay from './SevenDayForecastDay'

export default function SevenDayForecast({data}: {data: DailyData}) {

  return (
    <div>
      <div>Seven day forecast</div>
      {
        data.time.map((e, i) => (
            <SevenDayForecastDay key={i} index={i} data={data}/>
          )
        )
      }
    </div>
  )
}
