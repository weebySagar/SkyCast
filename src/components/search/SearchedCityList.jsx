import React from "react";

import rootStore from "../../stores/rootStore";
import { Link } from "react-router-dom";

const SearchedCityList = () => {
  const { searchedCity } = rootStore;

  return (
    <div className="searched-city-lists rounded-4 shadow mt-2">
      <ul>
        {searchedCity.map((city) => (
          <li key={city.geonameId} className="py-2 px-4 ">
            <Link
              className="d-flex justify-content-between text-black"
              to={`/weather/?lat=${city.latitude}&lon=${city.longitude}`}
            >
              <p>{city.name}</p>
              <p className="fs-6">{city.countryName}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedCityList;
