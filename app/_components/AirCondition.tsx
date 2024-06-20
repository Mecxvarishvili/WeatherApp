import React from 'react'
import { WeatherData } from '../_types/types'
import { FaSun, FaTemperatureHalf, FaDroplet } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import AirConditionCard from './AirConditionCard';

export default function AirCondition({
    data,
}: {
    data: WeatherData
}) {
    
  return (
    <div className="rounded-3xl px-8 py-5 bg-containerBg dark:bg-darkMode-containerBg border border-containerBorder dark:border-darkMode-containerBorder shadow-md" >
        <div className='flex justify-between'>
            <div className="text-xl capitalize">Air Condition</div>
            <button>See More</button>
        </div>

        <div className="grid grid-cols-2 gap-y-14 mt-4">
            <AirConditionCard text="Real Feel" value={data.current.apparent_temperature + data.current_units.apparent_temperature} ><FaTemperatureHalf /></AirConditionCard>
            <AirConditionCard text="Wind" value={data.current.wind_speed_10m + data.current_units.wind_speed_10m} ><FiWind /></AirConditionCard>
            <AirConditionCard text="Chance of Rain" value={data.current.rain} ><FaDroplet/></AirConditionCard>
            <AirConditionCard text="Uv Index" value={data.current.uv_index} ><FaSun /></AirConditionCard>
        </div>
    </div>
  )
}
