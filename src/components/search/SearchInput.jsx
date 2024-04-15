import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import fetchCity from "../../services/fetchCity";
import rootStore from "../../stores/rootStore";
import SearchedCityList from "./SearchedCityList";
import Spinner from "@components/ui/Spinner";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchInput = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const debouncedSearchTerm = useDebounce(searchedCity, 500);

  const { data, isLoading } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => fetchCity(debouncedSearchTerm),
  });

  const handleChange = (e) => {
    const city = e.target.value;
    setSearchedCity(city);
  };

  if (data) {
    rootStore.addSearchedCities(data.results);
  }

  return (
    <div className="search-input">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <form>
              <div className="input-wrapper d-flex align-items-center rounded-pill  px-4">
                <input
                  type="text"
                  className="py-3"
                  placeholder="Enter City Name"
                  value={searchedCity}
                  onChange={handleChange}
                />
                <div className="icon">
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <i class="fa-solid fa-magnifying-glass"></i>
                  )}
                </div>
              </div>
            </form>
            {!isLoading && <SearchedCityList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
