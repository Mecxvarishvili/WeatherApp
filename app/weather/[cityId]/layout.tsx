import WeatherDetailModal from '@/app/_components/WeatherDetailsModal'
import React from 'react'

type Props = {
    children: React.ReactNode,
}

export default function WeatherLayout({children}: Props) {
  return (
    <div>
        {children}
    </div>
  )
}
