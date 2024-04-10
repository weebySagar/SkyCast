import { types } from "mobx-state-tree";

const City = types.model({
    geonameId: types.identifier,
    name: types.string,
    countryName: types.string,
    timeZone: types.string,
    countryCode: types.string,
    latitude: types.optional,
    longitude: types.optional
})

export default City;