import React from 'react'
import { WeatherData } from '../_types/types'

export default function WeatherDetailsModal({data}: {data: WeatherData}) {
  const { current, current_units } = data
  return (
    <div className='absolute size-full h-full w-full top-0 left-0' >
      <div className="m-auto">
        <div>full detail of weather</div>

        <div>
            {current.time}
        </div>

        <div>
          {current.relative_humidity_2m}
        </div>

        <div>
          {current.temperature_2m}
        </div>

      </div>
    </div>
  )
}
