import axios from "axios";


const fetchCity = async (cityName) => {
    try {
        const { data } = await axios.get(
            `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=search(name,"${cityName}")`
        );
        return data;
    } catch (error) {
        throw new Error("Failed to fetch Cities")
    }
}

export default fetchCity;