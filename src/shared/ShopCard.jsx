import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router";

const ShopCard = ({ item }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const { _id, name, image, recipe, price } = item;

  const handleAddToCartBtn = () => {
    // console.log(item);

    if (user?.email) {
      const cartItem = {
        menuId: _id,
        customerEmail: user.email,
        name,
        image,
        recipe,
        price,
      };

      axiosPublic
        .post("/carts", cartItem)
        .then((res) => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Done!",
              text: "Item added to your cart.",
              icon: "success",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card h-96 bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="order img" className="w-full" />
        </figure>
        <p className="absolute right-0 top-4 mr-4 bg-slate-800 text-white rounded-xs px-2 py-1">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddToCartBtn}
              className="btn btn-outline btn-primary border-0 border-b-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
