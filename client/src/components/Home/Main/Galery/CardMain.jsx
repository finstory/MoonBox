import React, { useState } from "react";
import { useManagerText } from "../../../../hooks/useManagerText";
import { useNav } from "../../../../hooks/useNav";
import { useGlobalServices } from "../../../../services/useGlobalServices";

export const CardMain = ({
  id,
  name,
  sub_name,
  image,
  description,
  type,
  price,
}) => {
  const {
    addItemInFavorites,
    deleteItemInFavorites,
    itemExistsInFavorites,
    global: {
      favorites: { listItemId },
    },
  } = useGlobalServices();
  const { goDetails } = useNav();

  const { limitString } = useManagerText();
  sub_name = limitString(sub_name, 20);
  name = limitString(name, 17);

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

  const switchItemInFav = () => {
    itemExistsInFavorites(id)
      ? deleteItemInFavorites(id)
      : addItemInFavorites(id);
  };
  const [triggerFav, setTriggerFav] = useState(true);

  const onTriggerFav = (cond) => {
    setTriggerFav(cond);
  };

  if (listItemId)
    return (
      <div
        className="card-home"
        onPointerDownCapture ={() => {setTriggerFav(true)}}
        onClick={() => {
          triggerFav && goDetails(id);
        }}
      >
        <div
          className={`card-btn-favorites`}
          onClick={switchItemInFav}
          // onPointerEnter={() => {setTriggerFav(false)}}
          // onPointerDown={() => {setTriggerFav(true)}}
          // onPointerLeave={() => {setTriggerFav(true)}}
          // onPointerUp={() => {setTriggerFav(false)}}
          // onPointerEnter={() => {setTriggerFav(false)}}
          onPointerDown={() => {setTriggerFav(false)}}
       
        >
          <img
            src={
              itemExistsInFavorites(id)
                ? "https://res.cloudinary.com/dz9smi3nc/image/upload/v1667869690/shop-mugs/navSvgs/png.monster-69_xij86r.png"
                : "https://res.cloudinary.com/dz9smi3nc/image/upload/v1667871437/shop-mugs/navSvgs/heart-black_igs4gs.png"
            }
            alt="add favorites"
            className={
              itemExistsInFavorites(id) ? "card-btn-favorites-disabled" : ""
            }
          />
        </div>
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${image})`,
            opacity: 0.9,
          }}
        ></div>
        <div className="card-info">
          <div className="card-info-box">
            <p>{name}</p>
            <p>{sub_name}</p>
          </div>
          <div className="card-info-box ">
            <p
              className={`${colorType(type)}`}
              // style={{ backgroundColor: colorType(type) }}
            >
              {type.toUpperCase()}
            </p>
            <p>$ {price} us</p>
          </div>
        </div>
      </div>
    );
};
