import { Helmet } from "react-helmet-async";
import HeroCover from "../shared/HeroCover";
import orderBanner from "../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import Container from "../shared/Container";

const FoodShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
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
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </Container>
    </div>
  );
};

export default FoodShop;
