import { FaTrash } from "react-icons/fa";
import useCartsData from "../../hooks/useCartsData";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCart = () => {
  const [cartsData, refetch] = useCartsData();
  const axiosSecure = useAxiosSecure();

  const cartsPrice = cartsData.reduce(
    (total, currentValue) => total + currentValue.price,
    0,
  );

  const handleDeleteFromCarts = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // use refetch from tanstack query for updating data
              refetch();
            }
          })
          .catch((error) => {
            console.log("failed to delete from carts", error);
            Swal.fire({
              title: "Error!",
              text: "Could not delete the item.",
              icon: "error",
            });
          });
      }
    });
  };

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
                  <button
                    onClick={() => handleDeleteFromCarts(cartItem?._id)}
                    className="btn btn-xs btn-error"
                  >
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
