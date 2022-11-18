import React, { useEffect } from "react";
import { BtnCart } from "../components/Cart/BtnCart";
import { ListCart } from "../components/Cart/ListCart";
import { CardDetails } from "../components/Details/CardDetails";
import { useDetailsContext } from "../context/useDetalis";
import { useNav } from "../hooks/useNav";
import { useGlobalServices } from "../services/useGlobalServices";

export const Cart = () => {
  const { goHome } = useNav();
  const { details, setDetails } = useDetailsContext();
  const {
    editAmountItemInCart,
    deleteItemInCart,
    global: {
      cart: { listCart, itemSelected },
    },
  } = useGlobalServices();

  useEffect(() => {
    setDetails({ renderInCart: true });
    return () => {
      setDetails({ renderInCart: false });
    };
  }, []);

  if (listCart)
    return (
      <div className="details-container">
        <div className="cart-container">
          <CardDetails
            mugFromCart={listCart.find((item) => item.id === itemSelected)}
          />
          <div className="list-cart">
            <div className="title">
              <p>List Cart</p>
              <p>Mugs x {listCart.length}</p>
            </div>
            <ListCart />
            <BtnCart />
          </div>
          {/* <ListCart /> */}
        </div>
        <div className="btn-back" onClick={goHome}>
          <div className="img-wrap">
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1668472998/shop-mugs/navSvgs/back_cij8jw.png"
              alt="icon back"
            />
          </div>
          <p>Back</p>
        </div>
      </div>
    );
};
