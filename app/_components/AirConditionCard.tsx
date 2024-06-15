import React from 'react'

type Props = {
  children : React.ReactElement,
  text: string,
  value: string | number
}

export default function AirConditionCard({ children, value, text }: Props) {
  return (
    <div>
        <div className="text-2xl flex items-center font-light" > {children} {text} </div>
        <div className="text-3xl font-semibold mt-3">{value}</div>
    </div>
  )
}
