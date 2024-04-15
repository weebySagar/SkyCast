import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import rootStore from "../../stores/rootStore";
import fetchCities from "../../services/fetchCities";
import CityTable from "./CityTable";
import InnerWrapper from "../ui/InnerWrapper";
import Spinner from "@components/ui/Spinner";

const City = observer(() => {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["cities"],
      queryFn: fetchCities,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (rootStore.pagination.currentPage === 0 && data) {
      rootStore.setCities(data.pages[0].data);
    }
    if (inView) {
      fetchNextPage().then(() => {
        rootStore.fetchNextData();
        rootStore.updateCities(data.pages[data.pages.length - 1]?.data);
      });
    }
  }, [data, inView, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="city">
      <InnerWrapper>
        <div className="container">
          <h3>Select city to view weather</h3>
          <div className="content-wrap">
            <CityTable
              fetchNextPage={fetchNextPage}
              ref={ref}
              isFetchingNextPage={isFetchingNextPage}
            />
          </div>
        </div>
      </InnerWrapper>
    </section>
  );
});

export default City;
