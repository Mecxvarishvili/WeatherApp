import getCityWeather from '@/lib/getCityWeather'
import React from 'react'

type Props = {
  params: {
    search: string
  }
}

export default async function SearchPage({params}: Props) {
  const searchWeather: Promise<CitySearchType>= getCityWeather(params.search)
  const weather: CitySearchType= await searchWeather

  return (
    <div>
      <div>city: {weather.name}</div>
      <div>country: {weather.sys.country}</div>
      <div>Temperature: {weather.main.temp}</div>
      <div>Min Temperature: {weather.main.temp_min}</div>
      <div>max Temperature: {weather.main.temp_max}</div>
    </div>
  )
}
