import { useState } from "react";
import ItemCards from "./ItemCard";
import AppHeader from "../../HeaderComponent";

const ResCategory = ({ data, showless, setshowIndex, showIndex }) => {
  const handleclick = (index) => {
    if (showIndex == index) {
      return setshowIndex(null);
    }
    setshowIndex();
  };
  const toggleShow = (showless) => {
    return !showless;
  };
  return (
    <>
      {/* <AppHeader /> */}
      <div className=" w-6/12 mx-auto  ">
        <div
          className=" bg-gray-100 flex justify-between  shadow-lg border-b-2 p-4 m-4"
          onClick={handleclick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div className="px-4">
          {showless && <ItemCards item={data.itemCards} />}
        </div>
      </div>
    </>
  );
};
export default ResCategory;
