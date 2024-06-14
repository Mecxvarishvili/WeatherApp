import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ToggleTheme() {
    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if(!mounted) return (
        <div>1</div>
    )

    if(theme === "dark") {
        return <button onClick={() => setTheme('light')} className='text-2xl cursor-pointer' ><FaSun /></button>
    }

    if(theme === "light") {
        return <button onClick={() => setTheme('dark')}  className='text-2xl cursor-pointer' ><FaMoon /></button>
    }
}
