import React, { forwardRef } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import rootStore from "../../stores/rootStore";
import Spinner from "@components/ui/Spinner";
const CityTable = observer(
  forwardRef(({ isFetchingNextPage }, ref) => {
    const { cities, pagination } = rootStore;
    return (
      <div style={{ height: "500px", overflowY: "auto" }}>
        <div className="table-responsive">
          <table className="table table-striped mx-auto">
            <thead>
              <tr>
                <th>City name</th>
                <th>Country</th>
                <th>Time Zone</th>
                <th>Country Code</th>
              </tr>
            </thead>

            <tbody>
              {cities?.map(city => (
                <tr key={city.geonameId}>
                  <td>
                    <Link
                      to={`/weather?lat=${city.latitude}&long=${city.longitude}`}
                    >
                      {city.name}
                    </Link>
                  </td>
                  <td>{city.countryName}</td>
                  <td>{city.timeZone}</td>
                  <td>{city.countryCode}</td>
                </tr>
              ))}
              <div ref={ref} className="my-4 d-flex justify-content-center">
                {isFetchingNextPage && <Spinner />}
              </div>
            </tbody>
          </table>
        </div>
      </div>
    );
  })
);

export default CityTable;
