import axios from "axios";


const fetchCities = async ({ pageParam }) => {
    try {
        const limit = 20;
        const { data } = await axios.get(
            `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?order_by=name&limit=${limit}&offset=${pageParam}`
        );

        const hasMore = data.total_count > (pageParam + 1) * limit; // Check if there's more data

        return { data: data?.results, currentPage: pageParam, nextPage: hasMore ? pageParam + limit : null };
    } catch (error) {
        throw new Error("Failed to fetch Cities")
    }
}

export default fetchCities;