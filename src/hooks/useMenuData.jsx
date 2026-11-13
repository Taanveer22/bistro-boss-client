import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenuData = () => {
  const [menuData, setMenuData] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/menus")
      .then((res) => {
        setMenuData(res.data);
      })
      .catch((error) => {
        console.log("faliled to fetch menu data", error);
      });
  }, [axiosPublic]);

  return menuData;
};

export default useMenuData;
