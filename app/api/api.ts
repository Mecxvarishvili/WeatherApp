export async function getGeoCoding (city: string) {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    return res.json()
}

export async function getWeather (lat: number, lon: number) {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto`)
    return res.json()
}
