import axios from "axios";


const fetchAir = async (lat, lon) => {
    try {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=imperial`
        );
        return data;
    } catch (error) {
        throw new Error("Failed to fetch weather")
    }
}

export default fetchAir;