import React, { useContext } from "react";
// import sections & modals
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import DefaultModal from "../components/modals/DefaultModal";

import GlobalContext from "../context/globalContext";

const Home = () => {
  const { globalState, setGlobalContext } = useContext(GlobalContext);

  if (globalState?.showDefaultModal) {
    return <DefaultModal />;
  }

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
