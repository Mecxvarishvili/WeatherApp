export async function getGeoCoding (city: string) {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    return res.json()
}

export async function getWeather (lat: number, lon: number) {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,showers,snowfall,cloud_cover,wind_speed_10m,uv_index&daily=weather_code,precipitation_hours,precipitation_probability_mean&hourly=temperature_2m,weather_code`)
    return res.json()
}
