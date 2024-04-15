import { types } from "mobx-state-tree";

const SunInfoModel = types.model({
    sunrise: types.Date,
    sunset: types.Date
})

const TempInfoModel = types.model({
    minTemp: types.number,
    maxTemp: types.number
})
const Weather = types.model({
    current: types.optional(types.frozen({
        temperature: types.number,
        weatherDescription: types.string,
        humidity: types.number,
        windSpeed: types.number,
        visibility: types.number,
        airPollution: types.number,
        date: types.Date,
        name: types.string,
        main: types.string,
        sunInfo: SunInfoModel,
        tempInfo: TempInfoModel
    }), {}),
    forecast: types.array(types.frozen({
        temperature: types.number,
        day: types.Date,
        main: types.string
    }))

});


export default Weather;