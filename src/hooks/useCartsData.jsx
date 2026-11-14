import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCartsData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: cartsData = [], refetch } = useQuery({
    queryKey: ["cartsData", user?.email],
    queryFn: async () => {
      // "?email=" have to match req.query.email
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cartsData, refetch];
};

export default useCartsData;
