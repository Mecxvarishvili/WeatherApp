import AirCondition from '@/app/_components/AirCondition'
import DailyForecast from '@/app/_components/DailyForecast'
import TodayForecast from '@/app/_components/TodayForecast'
import WeatherIcon from '@/app/_components/WeatherIcon'
import { GeoCodings, LocationData, WeatherData } from '@/app/_types/types'
import { getGeoCoding, getWeather } from '@/app/api/api'
import React from 'react'


export async function generateMetadata ({params}: Props) {
    const city = params.cityId.charAt(0).toUpperCase() + params.cityId.slice(1)
    return {
        title: city
    }
}

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
        <div className='col-span-3 xl:col-span-2 grid gap-4' >
            <div className="flex justify-between my-14">
                <div>
                    <div className="text-5xl">{location.name}, {location.country}</div>
                    <div className="text-6xl mt-14">{weather.current.temperature_2m} {weather.current_units.temperature_2m}</div>
                </div>

                <WeatherIcon code={weather.current.weather_code} size={200}/>
            </div>

            <AirCondition data={weather} />

            <TodayForecast data={weather.hourly} />
        </div>

        <div className="col-span-3 xl:col-span-1">
            <DailyForecast data={weather.daily} />
        </div>
    </div>
  )
}
