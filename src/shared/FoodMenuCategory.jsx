import { Link } from "react-router";
import MenuItem from "./MenuItem";
import Container from "./Container";

const FoodMenuCategory = ({ category }) => {
  return (
    <div>
      <Container>
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {category.map((element) => (
            <MenuItem key={element._id} element={element}></MenuItem>
          ))}
        </section>
        <div className="flex justify-center items-center mt-4 ">
          <Link to="/menu" className="btn btn-outline border-0 border-b-2">
            Order Your Food
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FoodMenuCategory;
