import React from "react";

import rootStore from "../../stores/rootStore";

const SearchedCityList = () => {
  const { searchedCity } = rootStore;

  return (
    <div className="searched-city-lists rounded-4 shadow mt-2">
      <ul>
        {searchedCity.map(city => (
          <li
            key={city.geonameId}
            className="py-2 px-4 d-flex justify-content-between"
          >
            <p>{city.name}</p>
            <p className="fs-6">{city.countryName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedCityList;
