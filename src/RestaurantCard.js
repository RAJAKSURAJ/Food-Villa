import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AppHeader from "./HeaderComponent";

const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      {/* <AppHeader /> */}
      <Link to={`/restaurant/${restaurant?.info?.id}`}>
        <div className="w-[200px] h-[300px] p-2 m-2 shadow-lg bg-pink-50 rounded-lg">
          <div
            style={{
              height: "120px",
              weight: "120px",
              position: "relative",
              backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info.cloudinaryImageId})`,
              backgroundSize: "cover",
              borderRadius: "10px 10px 0 0",
            }}
          ></div>
          <div className="font-bold text-xl">{restaurant?.info?.name}</div>
          <div>Price: {restaurant?.info.costForTwo}</div>
          <div className="text-yellow-900 p-2">
            {"⭐ "}
            {restaurant?.info.avgRating}
            {" • "}
            {restaurant?.info?.sla?.deliveryTime}
            {" mins"}
          </div>
          <div className="text-yellow-900">
            {restaurant?.info?.cuisines.length > 5
              ? restaurant?.info?.cuisines.slice(0, 5).join(" , ") + " ..."
              : restaurant?.info?.cuisines.join(" , ")}
          </div>
        </div>
      </Link>
    </>
  );
};

export default RestaurantCard;
