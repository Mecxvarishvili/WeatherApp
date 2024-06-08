import { getWeather } from '@/app/api/api'
import React from 'react'

type Props = {
    params: {
        cityId: string
    }
}

export default async function CityWeatherPage({params}: Props) {
    const weather = getWeather(params.cityId)
    const data = await weather

  return (
    <div>
        
    </div>
  )
}
