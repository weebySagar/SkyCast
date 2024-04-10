import City from "@components/city/City";
import Search from "@components/search/Search";
import React from "react";

const Homepage = () => {
  return (
    <main>
      <Search />
      <City />
    </main>
  );
};

export default Homepage;
