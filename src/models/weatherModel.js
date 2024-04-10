import { types } from "mobx-state-tree";


const Weather = types.model({
    current: types.optional(types.frozen({
        temperature: types.number,
        weatherDescription: types.string,
        humidity: types.number,
        windSpeed: types.number,
        visibility: types.number,
        uvIndex: types.number,
    })),
    forecast: types.optional(types.frozen({
        date: types.Date,
        temperature: types.number
    }))

});


export default Weather;