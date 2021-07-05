import React from "react";
import Jumbotron from "./Jumbotron";
import PlanCards from "./PlanCards";
import SlideShow from "./SlideShow";

function Reel() {
  return (
    <div className="wrapper">
      <Jumbotron />
      <PlanCards />
      <SlideShow />
    </div>
  );
}
export default Reel;
