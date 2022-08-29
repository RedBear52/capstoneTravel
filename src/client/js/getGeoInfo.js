import { getWeatherInfo } from './getWeatherInfo'
import { getImage } from './getImage'
import { getCountryInfo } from './getCountryInfo'
import { packingList } from './packingList'

const getGeoInfo = async (userLocale) => {
    
    const longLatCountry = await fetch(
        `http://localhost:5200/geoFetch/:${userLocale}`
        )
        .then(res => res.json())
        .then(data => {
            if (data.geonames[0].countryName) {
                const country = data.geonames[0].countryName
                const lat = data.geonames[0].lat
                const lon = data.geonames[0].lng
           
            getWeatherInfo(lat, lon)
            getImage(userLocale, country)
            getCountryInfo(country)
            packingList(country)
            
        } else {
            alert('whoop! oh boy...')
        }
    })
}

export { getGeoInfo }
