import Banner from "../components/Banner";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Banner></Banner>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Category></Category>
      </section>
    </div>
  );
};

export default Home;
