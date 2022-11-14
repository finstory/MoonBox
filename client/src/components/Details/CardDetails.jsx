import React, { useEffect } from "react";
import { useDetailsContext } from "../../context/useDetalis";
import { useDetailsServices } from "../../services/useDetailsServices";
import { useGlobalServices } from "../../services/useGlobalServices";
export const CardDetails = ({ mugFromHome }) => {
  const {
    getItemById,
    details: { item },
  } = useDetailsServices();
  const {
    addItemInFavorites,
    deleteItemInFavorites,
    itemExistsInFavorites,
    global: {
      favorites: { listItemId },
    },
  } = useGlobalServices();
  console.log(mugFromHome);
  const mug = mugFromHome || item;

  const switchItemInFav = () => {
    itemExistsInFavorites(mug.id)
      ? deleteItemInFavorites(mug.id)
      : addItemInFavorites(mug.id);
  };

  const colorType = (type) => {
    switch (type) {
      case "Limited":
        return "type-limited";
      case "Magic":
        return "type-magic";
      case "Moon":
        return "type-moon";
      default:
        return "type-normal";
    }
  };

  useEffect(() => {
    getItemById();
  }, []);

  if (item && listItemId)
    return (
      <div className="card-details">
        <div className="card-details-box">
          <p className="title">Dragon Ball Super</p>
          <p className="sub-title">Ultra Instict Goku</p>
        </div>

        <div className="card-details-box">
          <div className="img-wrap">
            <div className="info-wrap">
              <div className="desc-box"></div>
              <div className="desc-box"></div>
              <div className="desc-box"></div>
            </div>
            <div className="info-wrap">
              <div className="info-type">
                <p className="type-limited">LIMITED</p>
              </div>
              <div className="info-edit">
                <div className="price">$ 6.00</div>
                <div className="favorites" onClick={switchItemInFav}>
                  <img
                    src={
                      itemExistsInFavorites(mug.id)
                        ? "https://res.cloudinary.com/dz9smi3nc/image/upload/v1667869690/shop-mugs/navSvgs/png.monster-69_xij86r.png"
                        : "https://res.cloudinary.com/dz9smi3nc/image/upload/v1667871437/shop-mugs/navSvgs/heart-black_igs4gs.png"
                    }
                    alt="add favorites"
                  />
                </div>
                <div className="amount">x 9 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-details-box">
          <div className="btn-gruop">
            <div className="btn-box">
              <p>Add</p>{" "}
              <img src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1668449509/shop-mugs/navSvgs/cart-svg_adtx9k.png" />
            </div>
            <div className="btn-box">
              <p>Buy Now</p>
            </div>
            <div className="btn-box">
              <div className="wrap">
                <p>-</p>
              </div>
              <div className="wrap">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

{
  /* <div className={`card-btn-favorites-detais`} onClick={switchItemInFav}>
<img
  src={
    itemExistsInFavorites(mug.id)
      ? "https://res.cloudinary.com/dz9smi3nc/image/upload/v1667869690/shop-mugs/navSvgs/png.monster-69_xij86r.png"
      : "https://res.cloudinary.com/dz9smi3nc/image/upload/v1667871437/shop-mugs/navSvgs/heart-black_igs4gs.png"
  }
  alt="add favorites"
  className={
    itemExistsInFavorites(mug.id) ? "card-btn-favorites-disabled" : ""
  }
/>
</div> */
}
