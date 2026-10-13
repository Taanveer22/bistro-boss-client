import { Helmet } from "react-helmet-async";
import HeroCover from "../shared/HeroCover";
import menuBanner from "../assets/menu/menu-banner.jpg";
import dessertBg from "../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";
import SectionTitle from "../shared/SectionTitle";
import FoodMenuCategory from "../shared/FoodMenuCategory";
import useFoodMenu from "../hooks/useFoodMenu";

const FoodMenu = () => {
  const foodMenu = useFoodMenu() || [];
  // console.log(foodMenu);

  const offeredMenu = foodMenu?.filter((item) => item.category === "offered");
  // console.log(offeredMenu);

  const dessertMenu = foodMenu?.filter((item) => item.category === "dessert");
  // console.log(dessertMenu);

  const pizzaMenu = foodMenu?.filter((item) => item.category === "pizza");
  // console.log(pizzaMenu);

  const saladMenu = foodMenu?.filter((item) => item.category === "salad");
  // console.log(saladMenu);

  const soupMenu = foodMenu?.filter((item) => item.category === "soup");
  // console.log(soupMenu);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* offered menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={menuBanner}
          title="our menu"
          description="Would you like to try a dish?"
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Offer"
        ></SectionTitle>
        <FoodMenuCategory category={offeredMenu}></FoodMenuCategory>
      </div>

      {/* dessert menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={dessertBg}
          title="dessert"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Offer"
        ></SectionTitle>
        <FoodMenuCategory category={dessertMenu}></FoodMenuCategory>
      </div>

      {/* pizza menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={pizzaBg}
          title="pizza"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Offer"
        ></SectionTitle>
        <FoodMenuCategory category={pizzaMenu}></FoodMenuCategory>
      </div>

      {/* salad menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={saladBg}
          title="salad"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Offer"
        ></SectionTitle>
        <FoodMenuCategory category={saladMenu}></FoodMenuCategory>
      </div>

      {/* soup menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={soupBg}
          title="soup"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Offer"
        ></SectionTitle>
        <FoodMenuCategory category={soupMenu}></FoodMenuCategory>
      </div>
    </>
  );
};

export default FoodMenu;
