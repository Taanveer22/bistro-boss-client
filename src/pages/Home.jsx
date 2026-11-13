import { Helmet } from "react-helmet-async";
import Banner from "../shared/Banner";
import PopularMenu from "../shared/PopularMenu";
import Testimonials from "../shared/Testimonials";
import MenuCategories from "../shared/MenuCategories";
import FeaturedMenu from "../shared/FeaturedMenu";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Banner></Banner>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <MenuCategories></MenuCategories>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <PopularMenu></PopularMenu>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <FeaturedMenu></FeaturedMenu>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Testimonials></Testimonials>
      </section>
    </>
  );
};

export default Home;
