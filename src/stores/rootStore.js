import { types } from "mobx-state-tree";

import City from "../models/cityModel";
import Weather from "../models/weatherModel";
import ForeCast from "../models/forecastModel";


const RootStore = types.model({
    cities: types.array(City),
    weather: types.optional(Weather, {}),
    searchedCity: types.array(City),
    pagination: types.optional(types.model({
        currentPage: types.optional(types.number, 0),
        pageSize: types.optional(types.number, 20),
        offset: types.optional(types.number, 0),
        hasMore: types.optional(types.boolean, true),
    }), {}),
    // selectedCityId: types.maybeNull(types.number),
}).actions(self => ({
    setCities(citiesData) {
        const cities = citiesData.map(city => ({
            geonameId: city.geoname_id,
            name: city.name,
            countryName: city.cou_name_en,
            timeZone: city.timezone,
            countryCode: city.country_code,
            latitude: city?.coordinates.lat && typeof city.coordinates.lat === 'number' ? city.coordinates.lat : undefined,
            longitude: city?.coordinates.lon && typeof city.coordinates.lon === 'number' ? city.coordinates.lon : undefined
        }))
        self.cities = cities
    },
    updateCities(citiesData) {
        const cities = citiesData.map(city => ({
            geonameId: city.geoname_id,
            name: city.name,
            countryName: city.cou_name_en,
            timeZone: city.timezone,
            countryCode: city.country_code,
            latitude: city?.coordinates.lat && typeof city.coordinates.lat === 'number' ? city.coordinates.lat : undefined,
            longitude: city?.coordinates.lon && typeof city.coordinates.lon === 'number' ? city.coordinates.lon : undefined
        }));


        self.cities.push(...cities)
    },
    addSearchedCities(citiesData) {

        const cities = citiesData.map(city => ({
            geonameId: city.geoname_id,
            name: city.name,
            countryName: city.cou_name_en,
            timeZone: city.timezone,
            countryCode: city.country_code,
            latitude: city.coordinates.lat,
            longitude: city.coordinates.lon
        }))
        self.searchedCity.replace(cities)
    },
    fetchNextData() {
        self.pagination.currentPage++;
    },

    updatedWeatherData(weatherData) {
        const weather = weatherData[0].data
        const air = weatherData[1].data
        const forecastData = weatherData[2].data

        const modifiedWeatherData = {
            current: {
                temperature: weather.main.temp,
                weatherDescription: weather.weather[0].description,
                humidity: weather.main.humidity,
                windSpeed: weather.wind.speed,
                visibility: parseInt(weather.visibility / 1000),
                airPollution: air.list[0].main.aqi,
                date: weather.dt,
                name: weather.name,
                main: weather.weather[0],
                sunInfo: {

                    sunrise: weather.sys.sunrise,
                    sunset: weather.sys.sunset,
                },
                tempInfo: {

                    minTemp: weather.main.temp_min,
                    maxTemp: weather.main.temp_max
                }
            },

        }

        const modifiedForecast = forecastData.list.map(item => ({
            day: item.dt,
            temperature: item.temp.day,
            main: item.weather[0].main
        }))
        self.weather.current = modifiedWeatherData.current;
        self.weather.forecast.replace(modifiedForecast)
    }
}))


const rootStore = RootStore.create({
    cities: [],
    weather: {},
    searchedCity: []
})

export default rootStore;