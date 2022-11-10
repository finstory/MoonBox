import React from "react";
import { CardDetails } from "./CardDetails";

export const Details = () => {
  return (
    <div className="details-container">
      <CardDetails />
      <div className="btn-back">
     <div className="img-wrap">
     <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1668106133/shop-mugs/navSvgs/arrow_back_tv6k1x.png"
          alt="icon back"
        />
     </div>
        <p>GO BACK</p>
      </div>
    </div>
  );
};
