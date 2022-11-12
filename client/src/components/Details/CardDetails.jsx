import React, { useEffect } from "react";
import { useDetailsContext } from "../../context/useDetalis";
import { useDetailsServices } from "../../services/useDetailsServices";
import { useGlobalServices } from "../../services/useGlobalServices";
export const CardDetails = ({mugFromHome}) => {
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
console.log(mugFromHome)
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
        <div className={`card-btn-favorites-detais`} onClick={switchItemInFav}>
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
        </div>
        <div className="img-wrap">
          <img src={mug.image} alt="" />
        </div>
        <div className="btn-wrap">
          <div className={`type ${colorType(mug.type)}`}>{mug.type}</div>
          <div className="view-full">
            Details
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1668177003/shop-mugs/navSvgs/eyes_lw3vnd.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="card-details-box">
        <div className="info-box">
          <div className="title">
            <div className="wrap">
              <p>{mug.name}</p>
            </div>
            <div className="wrap">
              <p>{mug.sub_name}</p>
            </div>
          </div>
          <div className="category">
            <p>Anime & Manga</p>
          </div>
        </div>

        <div className="info-box">
          <p>
            {/* {"Lorem ipsum is placeholder text commonly ishing industries for previewing .".toUpperCase()} */}
            {
              "This mugs is microwave safe & strong to falls. It have height of 9.5cm and diameter of 8.0cm."
            }
          </p>
        </div>
        <div className="info-box">
          <div className="price">
            <p>$ {mug.price}</p>
          </div>
          <div className="btn-gruop">
            <div className="buy-now">
              <p>Buy Now</p>
            </div>
            <div className="cart">
              <img
                src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1667477135/shop-mugs/navSvgs/shopping-cart-icon_1_qbqf7r_1_raj10e.png"
                alt="cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
