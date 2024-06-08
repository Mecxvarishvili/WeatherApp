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

    const weather = await getWeather(location.latitude, location.longitude)

  return (
    <div>
        <div>
            {location.name}
        </div>
    </div>
  )
}
