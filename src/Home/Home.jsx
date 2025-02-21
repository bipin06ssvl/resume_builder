import FeatureResume from "@/components/FeatureResume/FeatureResume";
import Hero from "@/components/Hero/Hero";
import PowerfullResume from "@/components/PowerfullResume/PowerfullResume";
import Review from "@/components/Review/Review";
import Templates from "@/components/Templates/Templates";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Review />
      <PowerfullResume />
      <Templates />
      <FeatureResume />
    </>
  );
};

export default Home;
