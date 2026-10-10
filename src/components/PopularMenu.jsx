import { useEffect, useState } from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import MenuItem from "../shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const pouplarMenuData = data.filter(
          (element) => element.category === "popular",
        );
        setMenu(pouplarMenuData);
      });
  }, []);

  return (
    <div>
      <Container>
        <SectionTitle
          heading="From Our Menu"
          subHeading="Check it out"
        ></SectionTitle>
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {menu.map((element) => (
            <MenuItem key={element._id} element={element}></MenuItem>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default PopularMenu;
