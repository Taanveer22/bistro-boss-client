import { Helmet } from "react-helmet-async";
import HeroCover from "../shared/HeroCover";
import orderBanner from "../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import Container from "../shared/Container";
import useFoodMenu from "../hooks/useFoodMenu";
import ShopTabCategory from "../shared/ShopTabCategory";

const FoodShop = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const foodMenu = useFoodMenu() || [];
  // console.log(foodMenu);

  const drinksMenu = foodMenu?.filter((item) => item.category === "drinks");
  // console.log(drinksMenu);

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
        <title>Bistro Boss | Order</title>
      </Helmet>

      <HeroCover
        bgPic={orderBanner}
        title={"our shop"}
        description={"Would you like to try a dish?"}
      ></HeroCover>

      <Container>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <ShopTabCategory cartItems={saladMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={pizzaMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={soupMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={dessertMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={drinksMenu}></ShopTabCategory>
          </TabPanel>
        </Tabs>
      </Container>
    </>
  );
};

export default FoodShop;
