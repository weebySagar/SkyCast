import { types } from "mobx-state-tree";

import City from "../models/cityModel";
import Weather from "../models/weatherModel";
import ForeCast from "../models/forecastModel";


const RootStore = types.model({
    cities: types.array(City),
    weather: types.map(Weather, (city) => city.id),
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
        console.log(citiesData[0].coordinates.lat);
        const cities = citiesData.map(city => ({
            geonameId: city.geoname_id,
            name: city.name,
            countryName: city.cou_name_en,
            timeZone: city.timezone,
            countryCode: city.country_code,
            latitude: city?.coordinates?.lat,
            longitude: city?.coordinates?.long
        }))
        console.log(cities[0]);
        self.cities = cities
    },
    updateCities(citiesData) {
        // console.log(citiesData);
        const cities = citiesData.map(city => ({
            geonameId: city.geoname_id,
            name: city.name,
            countryName: city.cou_name_en,
            timeZone: city.timezone,
            countryCode: city.country_code,
            latitude: city?.coordinates?.lat,
            longitude: city?.coordinates?.long
        }));


        self.cities.push(...cities)
    },
    addSearchedCities(citiesData) {
        const cities = citiesData.map(city => ({
            geonameId: city.geoname_id,
            name: city.name,
            countryName: city.cou_name_en,
            timeZone: city.timezone,
            countryCode: city.country_code
        }))
        self.searchedCity.replace(cities)
    },
    fetchNextData() {
        self.pagination.currentPage++;
    }
}))


const rootStore = RootStore.create({
    cities: [],
    weather: {},
    searchedCity: []
})

export default rootStore;