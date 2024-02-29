// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "./Banner";
import TrendingSection from "./TrendingSectiom";
import Posts from "../common_components/Posts/Posts";
import DiscoverFilters from "./DiscoverFilters";
// import Discover from "./Discover";

const Demo = () => {
  return (
    <>
      <Banner />
      <TrendingSection />
      <div className="size flex flex-col-reverse py-7 md:flex-row gap-[7rem]">
        <div className="flex-[1.5]">
          <Posts />
        </div>
        <div className="flex-[1] relative">

          <DiscoverFilters />
        </div>
      </div>
      
    </>
  );
};

export default Demo;
