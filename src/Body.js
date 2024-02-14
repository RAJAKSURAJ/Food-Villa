import React, { useEffect, useState } from "react";
import "./App.css";
import Shimmer from "./Shimmer";
import HeaderComponent from "./HeaderComponent";
import Footer from "./Footer";
import RestaurantCard from "./RestaurantCard";
import useOnline from "./Component/utils/useOnline";
function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function getAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    getAllRestaurants();
  }, []);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayRestaurants = searchQuery ? filteredRestaurants : restaurants;
  // const status = useOnline();
  // if (!status) {
  //   return <h1>🔴 Offline please check your internet connection</h1>;
  // }

  if (!restaurants) return null;

  return (
    <>
      <HeaderComponent />

      <div className="box-border bg-pink-50 my-4">
        <input
          className="focus:bg-orange-100 p-1 m-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {/* test */}
      {restaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {displayRestaurants?.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
      )}

      <Footer />
    </>
  );
}

export default Body;
