import { FaTrash } from "react-icons/fa";
import useCartsData from "../../hooks/useCartsData";

const MyCart = () => {
  const [cartsData] = useCartsData();
  const cartsPrice = cartsData.reduce(
    (total, currentValue) => total + currentValue.price,
    0,
  );

  return (
    <section>
      <div className="flex items-center justify-evenly">
        <h1 className="text-2xl font-medium">
          Total Orders : {cartsData.length}
        </h1>
        <h1 className="text-2xl font-medium">Total Price : $ {cartsPrice} </h1>
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* loop through all the cart items */}
            {cartsData.map((cartItem, index) => (
              <tr key={cartItem?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={cartItem?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{cartItem?.name}</td>
                <td>{cartItem?.price}</td>
                <th>
                  <button className="btn btn-xs btn-error">
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyCart;
