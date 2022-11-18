import React from "react";
import { useHomeServices } from "../../../services/useHomeServices";
import { MainFull } from "../../FullView/MainFull";
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
