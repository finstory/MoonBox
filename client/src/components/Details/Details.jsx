import React from "react";
import { useNav } from "../../hooks/useNav";
import { useDetailsServices } from "../../services/useDetailsServices";
import { useGlobalServices } from "../../services/useGlobalServices";
import { CardDetails } from "./CardDetails";

export const Details = () => {
  const { goHome } = useNav();
  const {
    global: {
      favorites: { listItemId },
    },
  } = useGlobalServices();
  const {
    details: { item },
  } = useDetailsServices();

  if (item && listItemId)
    return (
      <div className="details-container">
        <CardDetails />
        <div className="btn-back" onClick={goHome}>
          <div className="img-wrap">
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1668106133/shop-mugs/navSvgs/arrow_back_tv6k1x.png"
              alt="icon back"
            />
          </div>
          <p>Go Back</p>
        </div>
      </div>
    );
};
