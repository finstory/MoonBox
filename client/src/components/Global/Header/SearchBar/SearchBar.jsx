import React from "react";
import { img } from "../../../../assets/images";
import { useGlobalContext } from "../../../../context/useGlobal";

export const SearchBar = () => {
  const {
    global: { gameAdv },
    setGlobal,
  } = useGlobalContext();

  const focusInput = (condition) => {
    setGlobal({ gameAdv: { ...gameAdv, isFocus: condition } });
  };

  return (
    <div className="header-box">
      <div className="header__search">
        <div className="search-box">
          <p>MOONBOX</p>
        </div>
        <div className="search-box">
          <div className="input-box">
            <div className="svg-glass">
              <img src={img.glass} alt="place" />
            </div>
            <div style={{ zIndex: 40 }}>
              <input type="text" placeholder="Search your favorites Mugs"
              />
            </div>
          </div>
        </div>
        <div className="search-box">
          <div className="svg-flex">
            <div className="svg-box">
              <img src={img.face} alt="Place" />
            </div>
            <div className="svg-box">
              <img src={img.ig} alt="Place" />
            </div>
            <div className="svg-box">
              <img src={img.twitter} alt="Place" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
