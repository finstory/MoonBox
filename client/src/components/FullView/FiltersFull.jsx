import React, { useState } from "react";
import { useManagerText } from "../../hooks/useManagerText";

export const FiltersFull = () => {
  const { allFirstUpperCase } = useManagerText();

  const arrowDown =
    "https://res.cloudinary.com/dz9smi3nc/image/upload/v1668205441/shop-mugs/navSvgs/Arrow-down.svg_qz83og.png";

  const [listActiveMenus, setListMenuActive] = useState({
    material: false,
    category: false,
    price: false,
    type: false,
  });

  const [inputValues, setInputValues] = useState({
    material: "show All",
    category: "show All",
    price: "show All",
    type: "show All",
  });

  const handleInputChange = (e, name) => {
    setInputValues({
      ...inputValues,
      [name]: e.target.innerHTML.toLowerCase(),
    });
  };

  const switcActiveMenus = (name, cond) => {
    JSON.stringify(cond)
      ? setListMenuActive({ ...listActiveMenus, [name]: cond })
      : setListMenuActive({
          ...listActiveMenus,
          [name]: !listActiveMenus[name],
        });
  };

  return (
    <div className="filters">
      <div
        className="filters-box"
        onClick={() => {
          switcActiveMenus("material");
        }}
        onPointerEnter={() => {
          switcActiveMenus("material");
        }}
        onPointerLeave={() => {
          switcActiveMenus("material", false);
        }}
      >
        <p>Material :</p>
        <p> {allFirstUpperCase(inputValues.material)}</p>
        <img src={arrowDown} alt="arrow-down" />
        {listActiveMenus.material && (
          <div className="selector">
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "material")}>Show All</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "material")}>Ceramic</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "material")}>Plastic</p>
            </div>
          </div>
        )}
      </div>
      <div
        className="filters-box"
        onClick={() => {
          switcActiveMenus("category");
        }}
        onPointerEnter={() => {
          switcActiveMenus("category");
        }}
        onPointerLeave={() => {
          switcActiveMenus("category", false);
        }}
      >
        <p>Category :</p>
        <p> {allFirstUpperCase(inputValues.category)}</p>
        <img src={arrowDown} alt="arrow-down" />
        {listActiveMenus.category && (
          <div className="selector">
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "category")}>Show All</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "category")}>Anime</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "category")}>Gamers</p>
            </div>
          </div>
        )}
      </div>
      <div
        className="filters-box"
        onClick={() => {
          switcActiveMenus("price");
        }}
        onPointerEnter={() => {
          switcActiveMenus("price");
        }}
        onPointerLeave={() => {
          switcActiveMenus("price", false);
        }}
      >
        <p>Price :</p>
        <p> {allFirstUpperCase(inputValues.price)}</p>
        <img src={arrowDown} alt="arrow-down" />
        {listActiveMenus.price && (
          <div className="selector">
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "price")}>Show All</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "price")}>Low to Higth</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "price")}>Higth to Low</p>
            </div>
          </div>
        )}
      </div>
      <div
        className="filters-box"
        onClick={() => {
          switcActiveMenus("type");
        }}
        onPointerEnter={() => {
          switcActiveMenus("type");
        }}
        onPointerLeave={() => {
          switcActiveMenus("type", false);
        }}
      >
        <p>Type :</p>
        <p> {allFirstUpperCase(inputValues.type)}</p>
        <img src={arrowDown} alt="arrow-down" />
        {listActiveMenus.type && (
          <div className="selector">
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "type")}>Show All</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "type")}>Normal</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "type")}>Moon</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "type")}>Magic</p>
            </div>
            <div className="option">
              <p onClick={(e) => handleInputChange(e, "type")}>Limited</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
