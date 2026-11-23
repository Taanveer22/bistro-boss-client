import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AllUsers = () => {
  const { loading, user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: usersData = [], refetch } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
    enabled: !loading && !!user,
    retry: false,
  });

  const handleDeleteFromUsers = (userItem) => {
    // console.log(userItem);
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
          .delete(`/users/${userItem._id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              // use refetch from tanstack query for updating data
              refetch();
            }
          })
          .catch((error) => {
            console.log("failed to delete from users", error);
            Swal.fire({
              title: "Error!",
              text: "Could not delete the user.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleMakeAdminFromUsers = (userItem) => {
    // console.log(userItem);
    Swal.fire({
      title: "Are you sure?",
      text: "This user will shift to admin role!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${userItem._id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Modified!",
                text: "User role has shifted to admin.",
                icon: "success",
              });
              // use refetch from tanstack query for updating data
              refetch();
            }
          })
          .catch((error) => {
            console.log("failed to make admin from users", error);
            Swal.fire({
              title: "Error!",
              text: "Could not make admin the user.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-medium">Total Users : {usersData.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {usersData.map((userItem, index) => (
              <tr key={userItem?._id}>
                <th>{index + 1}</th>
                <td>{userItem?.name}</td>
                <td>{userItem?.email}</td>
                <td>
                  {userItem?.role === "admin" ? (
                    <span className="font-medium text-base">admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdminFromUsers(userItem)}
                      className="btn btn-xs btn-success"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteFromUsers(userItem)}
                    className="btn btn-xs btn-error"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
