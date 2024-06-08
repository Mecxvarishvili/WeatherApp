export async function getWeather (city: string) {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.6938&lon=44.8015&appid=c5b32355bedd238a280bbfe5b1b52ef7')
    return res.json()
}