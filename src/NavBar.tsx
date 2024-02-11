'use client'
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function NavBar() {
  const inputValue = useRef<HTMLInputElement>()
  const router = useRouter()
  
  return (
    <div>
      <form onSubmit={(e) =>{e.preventDefault(); router.push(`/location/${e.target.elements.location.value}`)}}>
        <input type='search' id="location"/>
        <button type="submit">search</button>
      </form>
    </div>
  )
}
