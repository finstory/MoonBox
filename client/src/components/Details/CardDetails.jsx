import React, { useEffect, useState } from "react";
import { useDetailsContext } from "../../context/useDetalis";
import { useNav } from "../../hooks/useNav";
import { useDetailsServices } from "../../services/useDetailsServices";
import { useGlobalServices } from "../../services/useGlobalServices";
export const CardDetails = ({ mugFromHome }) => {
  const {
    getItemById,
    details: { item, renderInCart },
  } = useDetailsServices();
  const {
    addItemInFavorites,
    deleteItemInFavorites,
    itemExistsInFavorites,
    addItemInCart,
    global: {
      favorites: { listItemId },
    },
  } = useGlobalServices();
  const { goHome } = useNav();
  const mug = mugFromHome || item;

  const [amount, setAmount] = useState(1);
  const [mugTemp, setMugTemp] = useState(false);

  const switchMugTemp = () => {
    if (valueTemp) setMugTemp(item.image);
    else setMugTemp(item.image_cold);
  };

  const updateAmount = (value) => {
    if (amount + value < 1 || amount + value > 9) return;
    setAmount(amount + value);
  };

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
    setTimeout(() => {
      setMugTemp(true);
    }, 1100);
  }, []);

  useEffect(() => {
    item.type === "Magic" || item.type === "Limited"
      ? setMugTemp(false)
      : setMugTemp(true);
  }, [item]);

  if (item && item.image && listItemId)
    return (
      <div className="card-details">
        <div className="card-details-box">
          <p className="title">{item.name}</p>
          <p className="sub-title">{item.sub_name}</p>
          <div className="btn-aditional">
            <div className={`favorites`} onClick={switchItemInFav}>
              <img
                src={
                  itemExistsInFavorites(mug.id)
                    ? "https://res.cloudinary.com/dz9smi3nc/image/upload/w_100/v1668529162/shop-mugs/navSvgs/heart-dark_mdts8m.png"
                    : "https://res.cloudinary.com/dz9smi3nc/image/upload/w_100/v1667871437/shop-mugs/navSvgs/heart-black_igs4gs.png"
                }
                alt="add favorites"
                className={
                  itemExistsInFavorites(mug.id)
                    ? "card-btn-favorites-disabled"
                    : ""
                }
              />
            </div>

            {!renderInCart && (
              <div className="close" onClick={goHome}>
                <p>-</p>
              </div>
            )}
          </div>
        </div>

        <div className="card-details-box">
          <div
            className="img-wrap"
            style={{
              transition:
                item.type === "Magic" || item.type === "Limited"
                  ? "background-image .5s"
                  : "background-image 0s",
              backgroundImage: `url("${
                mugTemp ? item.image : item.image_cold
              }")`,
              opacity: 0.9,
            }}
          >
            <div className="info-wrap">
              {(item.type === "Limited" || item.type === "Magic") && (
                <div className="desc-box">
                  <div className="wrap">
                    <img
                      src="https://res.cloudinary.com/dz9smi3nc/image/upload/w_60/v1668459418/shop-mugs/navSvgs/temp_tubwr5.png"
                      alt="image temperature"
                    />
                  </div>
                  <div className="wrap">
                    <p>CHANGE WHIT TEMPERATURE</p>
                  </div>
                </div>
              )}

              {(item.type === "Limited" || item.type === "Magic") && (
                <div
                  className="desc-box"
                  style={{ flexBasis: "31%", background: "transparent" }}
                >
                  <div className="wrap-temp">
                    <div className="temp">
                      <p>TEMPERATURE</p>
                    </div>
                    <div className="btn-switch">
                      <div
                        className="cold"
                        onClick={() => setMugTemp(false)}
                        style={!mugTemp ? { backgroundColor: "#4d465de2" } : {}}
                      >
                        <p>COLD</p>
                      </div>
                      <div
                        className="hot"
                        onClick={() => setMugTemp(true)}
                        style={mugTemp ? { backgroundColor: "#4d465de2" } : {}}
                      >
                        <p>HOT</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="desc-box" style={{ height: "3.9rem" }}>
                <div className="wrap">
                  <img
                    style={{ height: "45%", padding: ".5rem" }}
                    src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1668460759/shop-mugs/navSvgs/shield_p8ahgm.png"
                    alt="image temperature"
                  />
                </div>
                <div className="wrap">
                  <p>MUG STRONG AGAINST FALLS</p>
                </div>
              </div>
            </div>

            <div className="info-wrap">
              <div className="info-edit">
                <div className="info-edit-box">
                  <div
                    style={
                      (item.price * amount > 10 && {
                        marginLeft: "-.3rem",
                        paddingLeft: ".8rem",
                      }) ||
                      {}
                    }
                    className="price"
                  >
                    $ {(item.price * amount).toFixed(2)}
                  </div>
                </div>
                <div className="info-edit-box">
                  <div className="info-type">
                    <p className={`${colorType(item.type)}`}>{item.type}</p>
                  </div>
                </div>

                <div className="info-edit-box">
                  <div className="amount">x {amount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-details-box">
          <div className="btn-gruop">
            <div
              className="btn-box"
              onClick={() => {
                addItemInCart(item.id, amount);
              }}
            >
              {renderInCart ? (
                <>
                  <p>REMOVE</p>
                </>
              ) : (
                <>
                  <p>ADD</p>
                  <img src="https://res.cloudinary.com/dz9smi3nc/image/upload/w_60/v1668449509/shop-mugs/navSvgs/cart-svg_adtx9k.png" />
                </>
              )}
            </div>
            <div className="btn-box">
              <p>BUY NOW</p>
            </div>
            <div className="btn-box">
              <div className="wrap" onClick={() => updateAmount(-1)}>
                <p>-</p>
              </div>
              <div className="wrap" onClick={() => updateAmount(1)}>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
