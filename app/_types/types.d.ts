export type WeatherData = {
    "latitude": number,
    "longitude": number,
    "generationtime_ms": number,
    "utc_offset_seconds": number,
    "timezone": string,
    "timezone_abbreviation": string,
    "elevation": number,
    "current_units": {
        "time": string,
        "interval": string,
        "temperature_2m": string,
        "relative_humidity_2m": string,
        "apparent_temperature": string,
        "rain": string,
        "showers": string,
        "snowfall": string,
        "cloud_cover": string,
        "wind_speed_10m": string,
        "uv_index": string
    },
    "current": {
        "time": string,
        "interval": number,
        "temperature_2m": number,
        "relative_humidity_2m": number,
        "apparent_temperature": number,
        "rain": number,
        "showers": number,
        "snowfall": number,
        "cloud_cover": number,
        "wind_speed_10m": number,
        "uv_index": number
    },
    "hourly": {
        "time": Date[]
        "temperature_2m": number[]
        
    }
}

export type LocationData = {
    "id": number,
    "name": string,
    "latitude": number,
    "longitude": number,
    "elevation": number,
    "feature_code": string,
    "country_code": string,
    "admin1_id": number,
    "timezone": string,
    "population": number,
    "country_id": number,
    "country": string,
    "admin1": string
}

export type GeoCodings = {
    results: LocationData[]
}