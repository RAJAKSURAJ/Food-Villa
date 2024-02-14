import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "./Component/utils/useRestaurantmenu";
import ResCategory from "./Component/utils/ResCategory";
import AppHeader from "./HeaderComponent";
const Restaurantmenu = () => {
  const { id } = useParams();
  const restInfo = useRestaurantMenu(id);
  const [showIndex, setshowIndex] = useState(-1);

  if (restInfo == null) return <Shimmer />;

  const { name, cuisines, avgRating } = restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const Categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <AppHeader />
      <nav className="pl-[23.5%] text-xl m-6 flex justify-between ">
        <div>
          <h1 className="font-bold ">{name}</h1>
          <h2>{cuisines.join(", ")}</h2>
        </div>
        <div className=" pr-[355px]">⭐{avgRating}star</div>
      </nav>
      {Categories.map((Categories, index) => (
        <ResCategory
          key={Categories?.card?.card?.title}
          data={Categories?.card?.card}
          showless={index == showIndex && true}
          setshowIndex={() => setshowIndex(index)}
          showIndex={index == showIndex}
        />
      ))}
    </div>
  );
};
export default Restaurantmenu;
