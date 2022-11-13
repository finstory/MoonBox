import React from "react";
import { useHomeServices } from "../../../services/useHomeServices";
import { Details } from "../../Details/Details";
import { MainFull } from "../../FullView/MainFull";
import { Footer } from "../../Global/Footer/Footer";
import { CarouselMain } from "./Carousel/CarouselMain";
import { SelectorCarousel } from "./Carousel/SelectorCarousel";

export const Main = () => {
  const {
    home: { activeFullView },
  } = useHomeServices();
  return (
    <>
      {activeFullView ? (
        <MainFull />
      ) : (
        <>
          <CarouselMain />
          <SelectorCarousel />
        </>
      )}
    </>
  );
};
