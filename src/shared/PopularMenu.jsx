import { useEffect, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import { Link } from "react-router";
import useAxiosPublic from "../hooks/useAxiosPublic";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/menus")
      .then((res) => {
        // console.log(res.data);
        const popularMenuData = res.data.filter(
          (item) => item.category === "popular",
        );
        setMenu(popularMenuData);
      })
      .catch((error) => {
        console.log("Failed to fetch menu data:", error);
      });
  }, [axiosPublic]);

  return (
    <div>
      <Container>
        <SectionTitle
          heading="From Popular Menu"
          subHeading="Check it out"
        ></SectionTitle>
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {menu.map((element) => (
            <MenuItem key={element._id} element={element}></MenuItem>
          ))}
        </section>
        <div className="flex justify-center items-center mt-4 ">
          <Link to="/menu" className="btn btn-outline border-0 border-b-2">
            View Full Menu
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PopularMenu;
