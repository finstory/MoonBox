import React, { useEffect } from "react";
import { useHomeServices } from "../../../../services/useHomeServices";
import { CardMain } from "../Galery/CardMain";
import { BtnCarousel } from "./BtnCarousel";

export const CarouselMain = () => {
  const {
    goPageCarousel,
    global,
    home: {
      carousel: { list },
    },
  } = useHomeServices();
  useEffect(() => {
    goPageCarousel(1);
  }, [global.filtersCarousel]);
  return (
    <div className="main-box">
      <BtnCarousel />
      <div className="carousel">
        {list && list.length ? (
          list.map((mug) => <CardMain key={mug.id} {...mug} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
