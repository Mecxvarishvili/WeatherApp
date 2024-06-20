import React from 'react'
import Image from 'next/image';

export default function WeatherIcon({ code }: {
    code: number
}) {
    const getImageFromCode = (code: number) => {
        switch (code) {
          case 0:
              return { alt: 'Clear sky', icon: '/images/day_clear.svg' };
          case 1:
          case 2:
          case 3:
              return { alt: 'Partly cloudy', icon: '/images/day_partial_cloud.svg' };
          case 45:
          case 48:
              return { alt: 'Fog', icon: '/images/fog.svg' };
          case 51:
          case 53:
          case 55:
              return { alt: 'Drizzle', icon: '/images/rain.svg' };
          case 56:
          case 57:
              return { alt: 'Freezing Drizzle', icon: '/images/night_full_moon_sleet.svg' };
          case 61:
          case 63:
          case 65:
              return { alt: 'Rain', icon: '/images/rain.svg' };
          case 66:
          case 67:
              return { alt: 'Freezing Rain', icon: '/images/night_full_moon_sleet.svg' };
          case 71:
          case 73:
          case 75:
              return { alt: 'Snow', icon: '/images/snow.svg' };
          case 77:
              return { alt: 'Snow Grains', icon: '/images/snow.svg' };
          case 80:
          case 81:
          case 82:
              return { alt: 'Rain Showers', icon: '/images/day_rain.svg' };
          case 85:
          case 86:
              return { alt: 'Snow Showers', icon: '/images/day_snow.svg' };
          case 95:
              return { alt: 'Thunderstorm', icon: '/images/thunder.svg' };
          case 96:
          case 99:
              return { alt: 'Thunderstorm with Hail', icon: '/images/night_full_moon_rain_thunder.svg' };
          default:
          {getImageFromCode(code)}    return { alt: 'Unknown', icon: '/images/cloudy.svg' };
      }
    }
    const {alt, icon} = getImageFromCode(code)

    return (
      <div>
        <Image src={icon} alt={alt} width={100} height={100}/>
      </div>
  )
}
