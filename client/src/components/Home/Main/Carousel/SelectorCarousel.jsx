import React from "react";
import { useHomeServices } from "../../../../services/useHomeServices";

export const SelectorCarousel = () => {
  const {
    goPageCarousel,
    home: {
      carousel: { actualPage, maxPage },
    },
  } = useHomeServices();

  const colorSelected = (num) => {
    if (actualPage === num) return "#382e43cc";
    else return "#f2eff4b0";
  };

  const listBtn = [];
  for (let i = 1; i < maxPage + 1; i++) {
    listBtn.push(
      <div
        key={i}
        className="selector-btn-box"
        style={{ backgroundColor: colorSelected(i) }}
        onClick={() => {
          goPageCarousel(i);
        }}
      ></div>
    );
  }

  return (
    <div className="main-box">
      <div className="selector-carousel">
        <div className="selector-btn">{listBtn}</div>
        <div className="view-all">
          <p>VIEW ALL</p>
        </div>
      </div>
    </div>
  );
};
