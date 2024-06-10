import React from 'react'

export default function WeatherIcon({ code }: {
    code: number
}) {
    const getImageFromCode = (code: number) => {
        switch (code) {
            case 0:
              return '/images/clear-sky.png';
            case 1:
            case 2:
            case 3:
              return '/images/mainly-clear.png';
            case 45:
            case 48:
              return '/images/fog.png';
            case 51:
            case 53:
            case 55:
              return '/images/drizzle.png';
            case 56:
            case 57:
              return '/images/freezing-drizzle.png';
            case 61:
            case 63:
            case 65:
              return '/images/rain.png';
            case 66:
            case 67:
              return '/images/freezing-rain.png';
            case 71:
            case 73:
            case 75:
              return '/images/snow-fall.png';
            case 77:
              return '/images/snow-grains.png';
            case 80:
            case 81:
            case 82:
              return '/images/rain-showers.png';
            case 85:
            case 86:
              return '/images/snow-showers.png';
            case 95:
              return '/images/thunderstorm-slight.png';
            case 96:
            case 99:
              return '/images/thunderstorm-heavy.png';
            default:
              return '/images/default.png';
        }
    }
    return (
    <div>{getImageFromCode(code)}</div>
  )
}
