import React from "react";
import { Details } from "../../Details/Details";
import { MainFull } from "../../FullView/MainFull";
import { Footer } from "../../Global/Footer/Footer";
import { CarouselMain } from "./Carousel/CarouselMain";
import { SelectorCarousel } from "./Carousel/SelectorCarousel";

export const Main = () => {
  return (
    <>
        {/* <CarouselMain />
        <SelectorCarousel />   */}
        <MainFull/>
    </>
  );
};
