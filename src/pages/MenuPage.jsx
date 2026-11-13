import { Helmet } from "react-helmet-async";
import HeroCover from "../shared/HeroCover";
import menuBanner from "../assets/menu/menu-banner.jpg";
import dessertBg from "../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";
import SectionTitle from "../shared/SectionTitle";
import MenuPageCategory from "../shared/MenuPageCategory";
import useMenuData from "../hooks/useMenuData";

const MenuPage = () => {
  const foodMenuData = useMenuData() || [];
  // console.log(foodMenuData);

  const offeredMenuData = foodMenuData?.filter(
    (item) => item.category === "offered",
  );
  // console.log(offeredMenuData);

  const saladMenuData = foodMenuData?.filter(
    (item) => item.category === "salad",
  );
  // console.log(saladMenuData);

  const pizzaMenuData = foodMenuData?.filter(
    (item) => item.category === "pizza",
  );
  // console.log(pizzaMenuData);

  const soupMenuData = foodMenuData?.filter((item) => item.category === "soup");
  // console.log(soupMenuData);

  const dessertMenuData = foodMenuData?.filter(
    (item) => item.category === "dessert",
  );
  // console.log(dessertMenuData);

  const drinkMenuData = foodMenuData?.filter(
    (item) => item.category === "drink",
  );
  console.log(drinkMenuData);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* offered menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={menuBanner}
          title="offer menu"
          description="Would you like to try a dish?"
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Offer"
        ></SectionTitle>
        <MenuPageCategory
          menuCategoryData={offeredMenuData}
          menuCategory="offered"
        ></MenuPageCategory>
      </div>

      {/* salad menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={saladBg}
          title="salad"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Salad"
        ></SectionTitle>
        <MenuPageCategory
          menuCategoryData={saladMenuData}
          menuCategory="salad"
        ></MenuPageCategory>
      </div>

      {/* pizza menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={pizzaBg}
          title="pizza"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Pizza"
        ></SectionTitle>
        <MenuPageCategory
          menuCategoryData={pizzaMenuData}
          menuCategory="pizza"
        ></MenuPageCategory>
      </div>

      {/* soup menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={soupBg}
          title="soup"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Soup"
        ></SectionTitle>
        <MenuPageCategory
          menuCategoryData={soupMenuData}
          menuCategory="soup"
        ></MenuPageCategory>
      </div>

      {/* dessert menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={dessertBg}
          title="dessert"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Dessert"
        ></SectionTitle>
        <MenuPageCategory
          menuCategoryData={dessertMenuData}
          menuCategory="dessert"
        ></MenuPageCategory>
      </div>

      {/* drinks menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={soupBg}
          title="drinks"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Drink"
        ></SectionTitle>
        <MenuPageCategory
          menuCategoryData={drinkMenuData}
          menuCategory="drink"
        ></MenuPageCategory>
      </div>
    </>
  );
};

export default MenuPage;
