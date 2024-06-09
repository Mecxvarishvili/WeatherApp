import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function ToggleTheme() {
    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if(!mounted) return (
        <div>1</div>
    )

    if(theme === "dark") {
        return <button onClick={() => setTheme('light')}>set light</button>
    }

    if(theme === "light") {
        return <button onClick={() => setTheme('dark')}>set dark</button>
    }
}
