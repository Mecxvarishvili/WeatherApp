import React from 'react'
import { WeatherData } from '../_types/types'

export default function AirConditionCard({
    data,
}: {
    data: WeatherData
}) {
    
  return (
    <div>
        <div className='flex justify-between'>
            <div>air condition</div>
            <button>sea more</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <div>real feel</div>
                <div>{data.current.apparent_temperature} {data.current_units.apparent_temperature}</div>
            </div>

            <div>
                <div>wind</div>
                <div>{data.current.wind_speed_10m} {data.current_units.wind_speed_10m}</div>
            </div>

            <div>
                <div>chance of rain</div>
                {data.current.rain}
            </div>

            <div>
                <div>uv index</div>
                <div>{data.current.uv_index}</div>
            </div>
        </div>
    </div>
  )
}