import { useEffect, useState } from "react";

const useFoodMenu = () => {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    fetch(`/menu.json`)
      .then((res) => res.json())
      .then((data) => setFoodMenu(data));
  }, []);

  return foodMenu;
};

export default useFoodMenu;
