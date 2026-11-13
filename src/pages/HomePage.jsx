import { Helmet } from "react-helmet-async";
import Banner from "../shared/Banner";
import PopularMenu from "../shared/PopularMenu";
import Testimonials from "../shared/Testimonials";
import FeaturedMenu from "../shared/FeaturedMenu";
import AvailableMenu from "../shared/AvailableMenu";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Banner></Banner>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <AvailableMenu></AvailableMenu>
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

export default HomePage;
