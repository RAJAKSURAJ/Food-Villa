import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (redId) => {
  const [restInfo, setrestinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + redId);
    const json = await data.json();

    setrestinfo(json.data);
  };
  return restInfo;
};
export default useRestaurantMenu;
