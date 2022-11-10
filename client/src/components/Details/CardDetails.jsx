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
            <p>ANIME & MANGA</p>
          </div>
        </div>

        <div className="info-box">
          <p>
            {/* {"Lorem ipsum is placeholder text commonly ishing industries for previewing .".toUpperCase()} */}
            {"this mugs is microwave safe & strong to falls. it have height of 9.5cm and diameter of 8.0cm.".toUpperCase()}
          </p>
        </div>
        <div className="info-box">
          <div className="price">
            <p>$ 6.00</p>
          </div>
          <div className="btn-gruop">
            <div className="buy-now">
              <p> BUY NOW</p>
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
