'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Header() {
  const [ input, setInput ] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(input) {
      router.push(`/weather/${input}`)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id="search" type="text" />
        <button type='submit'>submit</button>
      </form>
    </header>
  )
}
