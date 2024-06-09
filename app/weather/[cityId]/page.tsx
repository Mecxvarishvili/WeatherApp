import AirConditionCard from '@/app/_components/AirConditionCard'
import { GeoCodings, LocationData, WeatherData } from '@/app/_types/types'
import { getGeoCoding, getWeather } from '@/app/api/api'
import React from 'react'

type Props = {
    params: {
        cityId: string
    }
}

export default async function CityWeatherPage({params}: Props) {
    const locationData: GeoCodings = await getGeoCoding(params.cityId);
    if(!locationData.results) {
        return (
            <div>location was not found</div>
        )
    }
    const location: LocationData = locationData.results[0]

    const weather: WeatherData = await getWeather(location.latitude, location.longitude)

  return (
    <div className='grid grid-cols-3 gap-4 container mx-auto' >
        <div className='col-span-3 lg:col-span-2 grid gap-4' >
            <div >
                <div>{location.name}, {location.country}</div>
                <div>{weather.current.temperature_2m} {weather.current_units.temperature_2m}</div>

            </div>

            <AirConditionCard data={weather} />

            <div>
                todays forecast
            </div>
        </div>

        <div className="col-span-3 lg:col-span-1">7 days forecast</div>
    </div>
  )
}
