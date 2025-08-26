import Banner from "@/components/Home/Banner";
import BannerCard from "@/components/Home/BannerCard";
import Built from "@/components/Home/Built";
import HomeVideo from "@/components/Home/HomeVideo";
import Solution from "@/components/Home/Solution";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <BannerCard />
      <Built />
      <Solution />
      <HomeVideo />
    </>
  );
};

export default page;
