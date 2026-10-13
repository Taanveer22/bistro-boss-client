import { Helmet } from "react-helmet-async";
import HeroCover from "../shared/HeroCover";
import menuBanner from "../assets/menu/menu-banner.jpg";
import SectionTitle from "../shared/SectionTitle";
import FoodMenuCategory from "../shared/FoodMenuCategory";
import useFoodMenu from "../hooks/useFoodMenu";

const FoodMenu = () => {
  const foodMenu = useFoodMenu() || [];
  // console.log(foodMenu);

  const offeredMenu = foodMenu?.filter((item) => item.category === "offered");
  // console.log(offeredMenu);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* offered menu */}
      <section className="mb-8 sm:mb-10 lg:mb-12">
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
      </section>
    </div>
  );
};

export default FoodMenu;
