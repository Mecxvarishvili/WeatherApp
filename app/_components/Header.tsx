'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ToggleTheme from './ToggleTheme'
import { IoSearch } from "react-icons/io5";

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
    <header className='container mx-auto my-4 px-10 flex justify-between' >
      <form onSubmit={handleSubmit} className="rounded-3xl flex bg-containerBg dark:bg-darkMode-containerBg border border-containerBorder dark:border-darkMode-containerBorder shadow-md px-4 py-2">
        <input onChange={handleChange} id="search" type="text" className="outline-none bg-containerBf  dark:bg-darkMode-containerBg" />
        <button type='submit' className="cursor-pointer text-2xl"><IoSearch /></button>
      </form>
      <ToggleTheme />
    </header>
  )
}
