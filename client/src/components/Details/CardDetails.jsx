import React from "react";

export const CardDetails = () => {
  return (
    <div className="card-details">
      <div className="card-details-box">
        <div className="img-wrap">
          <img
            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1667914563/shop-mugs/items/IMAGE_iltip4.png"
            alt=""
          />
        </div>
        <div className="btn-wrap">
          <div className="type type-magic">MAGIC</div>
          <div className="view-full">VIEW FULL</div>
        </div>
      </div>
      <div className="card-details-box">
        <div className="info-box">
          <div className="title">
            <div className="wrap">
              <p>DRAGON BALL SUPER</p>
            </div>
            <div className="wrap">
              <p>GOKU ULTRA INSTIC</p>
            </div>
          </div>
          <div className="category">
            <p>ANIME | MANGA</p>
          </div>
        </div>

        <div className="info-box"></div>
        <div className="info-box"></div>
      </div>
    </div>
  );
};
