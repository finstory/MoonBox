import React, { useEffect } from "react";
import { useGlobalServices } from "../../../../services/useGlobalServices";
import { useLoginServices } from "../../../../services/useLoginServices";

export const Cart = () => {
  const { logout } = useLoginServices();

  const {
    getAllCartByUserId,
    editAmountItemInCart,
    deleteItemInCart,
    global: {
      cart: { listCart, totalPrice },
    },
  } = useGlobalServices();

  const colorType = (type) => {
    switch (type) {
      case "Magic":
        return "type-magic";
      case "Limited":
        return "type-limited";
      case "Moon":
        return "type-moon";
      default:
        return "type-normal";
    }
  };

  const disabledProfile = () => {
    if (listCart && listCart.length > 0) return "";
    return "disabled-color-profile";
  };

  const updateAmount = (idItem, itemAmount, value) => {
    if (value === -1 && itemAmount <= 1) return;
    if (value === 1 && itemAmount >= 10) return;
    editAmountItemInCart(idItem, itemAmount + value);
  };

  const reSizeImage = (url, weigth) => {
    let newUrl = "";
    const list = url.split("/upload/");

    for (let i = 0; i < list.length; i++)
      if (i === 0) newUrl = list[i] + `/upload/w_${weigth},f_auto/`;
      else newUrl += list[i];

    return newUrl;
  };

  return (
    <div className="slide-profile">
      <div className="slide-cart-box anim-showing">
        <div className="list-cart-container">
          {/* <div className="list-cart-mask"></div> */}
          <div className="list-cart">
            {listCart && listCart.length > 0 ? (
              listCart.map((item) => (
                <div key={item.id} className="product-box">
                  <div className="left-wrap">
                    <div className="img-wrap">
                      <div className={`type ${colorType(item.type)}`}>
                        <p>{item.type.toUpperCase()}</p>
                      </div>
                      <img
                        src={reSizeImage(item.full_image, 250)}
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <div className="right-wrap">
                    <div className="box">
                      <p>
                        {item.name.slice(0, 11).toUpperCase()}
                        {item.name.length > 11 ? "..." : ""}
                      </p>
                    </div>
                    <div className="box">
                      <p>X {item.amount}</p>
                      <div className="panel">
                        <div
                          className="btn-panel"
                          onClick={() => updateAmount(item.id, item.amount, -1)}
                        >
                          <img
                            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1667127829/shop-mugs/navSvgs/menos_q61nzc.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="btn-panel"
                          onClick={() => updateAmount(item.id, item.amount, 1)}
                        >
                          <img
                            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1667127768/shop-mugs/navSvgs/mas_uvqcdg.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="btn-panel"
                          onClick={() => deleteItemInCart(item.id)}
                        >
                          <img
                            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1667128328/shop-mugs/navSvgs/delete-icon_rfiprx.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="cart-empty">
                <p>YOUR CART IS EMPTY !</p>
              </div>
            )}

            {listCart && listCart.length === 1 ? (
              <div
                className="product-box"
                style={{
                  backgroundColor: "#1e19254f",
                }}
              >
                <div className="left-wrap">
                  <div
                    className="img-wrap"
                    style={{
                      backgroundColor: "#dbd6e015",
                      cursor: "default",
                      borderRadius: "1rem",
                      padding: ".6rem 0",
                      width: "4.5rem",
                      height: "3rem",
                    }}
                  ></div>
                </div>
                <div className="right-wrap">
                  <div className="box">
                    <p
                      style={{
                        backgroundColor: "#dbd6e015",
                        borderRadius: "1rem",
                        padding: ".7rem 0",
                        margin: "0 1rem",
                        width: "80%",
                      }}
                    ></p>
                  </div>
                  <div className="box">
                    <p
                      style={{
                        backgroundColor: "#dbd6e015",
                        borderRadius: "1rem",
                        padding: ".7rem 0",
                        margin: "0 1rem",
                        width: "80%",
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            ) : listCart && listCart.length === 0 ? (
              <>
                <div
                  className="product-box"
                  style={{
                    backgroundColor: "#1e19254f",
                  }}
                >
                  <div className="left-wrap">
                    <div
                      className="img-wrap"
                      style={{
                        pointerEvents: "none",
                        backgroundColor: "#dbd6e015",
                        cursor: "default",
                        borderRadius: "1rem",
                        padding: ".6rem 0",
                        width: "4.5rem",
                        height: "3rem",
                      }}
                    ></div>
                  </div>
                  <div className="right-wrap">
                    <div className="box">
                      <p
                        style={{
                          backgroundColor: "#dbd6e015",
                          borderRadius: "1rem",
                          padding: ".7rem 0",
                          margin: "0 1rem",
                          width: "80%",
                        }}
                      ></p>
                    </div>
                    <div className="box">
                      <p
                        style={{
                          backgroundColor: "#dbd6e015",
                          borderRadius: "1rem",
                          padding: ".7rem 0",
                          margin: "0 1rem",
                          width: "80%",
                        }}
                      ></p>
                    </div>
                  </div>
                </div>

                <div
                  className="product-box"
                  style={{
                    backgroundColor: "#1e19254f",
                  }}
                >
                  <div className="left-wrap">
                    <div
                      className="img-wrap"
                      style={{
                        pointerEvents: "none",
                        backgroundColor: "#dbd6e015",
                        cursor: "default",
                        borderRadius: "1rem",
                        padding: ".6rem 0",
                        width: "4.5rem",
                        height: "3rem",
                      }}
                    ></div>
                  </div>
                  <div className="right-wrap">
                    <div className="box">
                      <p
                        style={{
                          backgroundColor: "#dbd6e015",
                          borderRadius: "1rem",
                          padding: ".7rem 0",
                          margin: "0 1rem",
                          width: "80%",
                        }}
                      ></p>
                    </div>
                    <div className="box">
                      <p
                        style={{
                          backgroundColor: "#dbd6e015",
                          borderRadius: "1rem",
                          padding: ".7rem 0",
                          margin: "0 1rem",
                          width: "80%",
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="slide-cart-box anim-showing">
        <div className={`btn-total ${disabledProfile()}`}>
          <p>TOTAL : {totalPrice}</p>
        </div>
      </div>
      <div className="slide-cart-box anim-showing">
        <div className={`btn-view-all ${disabledProfile()}`}>
          <div className="img-wrap">
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1667127016/shop-mugs/navSvgs/Eye_open_font_awesome.svg_vwzxuj.png"
              alt=""
            />
          </div>
          <p>VIEW ALL</p>
        </div>
        <div className={`btn-pay-now ${disabledProfile()}`}>
          <div className="img-wrap">
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1667144802/shop-mugs/navSvgs/pay-15_txowyv.png"
              alt=""
            />
          </div>
          <p>BUY NOW</p>
        </div>
      </div>
    </div>
  );
};
