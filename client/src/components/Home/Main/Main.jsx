import React from "react";
import { Details } from "../../Details/Details";
import { Footer } from "../../Global/Footer/Footer";
import { CarouselMain } from "./Carousel/CarouselMain";
import { SelectorCarousel } from "./Carousel/SelectorCarousel";

export const Main = () => {
  return (
    <>
      <main className="main-index">
        {/* <CarouselMain />
        <SelectorCarousel /> */}
        <Details/>
        <Footer />
      </main>
    </>
  );
};
