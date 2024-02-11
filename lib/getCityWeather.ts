export default async function getCityWeather (search: string) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.API_KEY}`)

    if  (!res.ok) throw new Error("failed to fetch data")

    return res.json()
}