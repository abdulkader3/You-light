import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PartOne from "../Components/Page component/PartOne";
import PartTwo from "../Components/Page component/PartTwo";
import PartThree from "../Components/Page component/PartThree";
import PartFour from "../Components/Page component/PartFour";
import PartFive from "../Components/Page component/PartFive";
import Footer from "../Components/Page component/Footer";

const MainPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <div className="main-page">
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
      <PartFive />
      <Footer />
    </div>
  );
};

export default MainPage;
