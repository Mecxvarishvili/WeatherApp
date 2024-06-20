import AirCondition from '@/app/_components/AirCondition'
import DailyForecast from '@/app/_components/DailyForecast'
import HourlyForecast from '@/app/_components/HourlyForecast'
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
    <div className='container mx-auto px-10 grid grid-cols-3 gap-4 ' >
        <div className='col-span-3 lg:col-span-2 grid gap-4' >
            <div className="flex justify-between my-14">
                <div>
                    <div className="text-5xl">{location.name}, {location.country}</div>
                    <div className="text-6xl mt-14">{weather.current.temperature_2m} {weather.current_units.temperature_2m}</div>
                </div>

                <div>
                    image
                </div>
            </div>

            <AirCondition data={weather} />

            <HourlyForecast data={weather.hourly} />
        </div>

        <div className="col-span-3 lg:col-span-1">
            <DailyForecast data={weather.daily} />
        </div>
    </div>
  )
}
