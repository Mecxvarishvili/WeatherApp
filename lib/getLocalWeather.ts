import getUserIp from "./getUserIp"


export default async function getLocalWeather () {
    const ip: Promise<IP> =  getUserIp()
    const userIp = await ip
    
    return userIp.ip
}