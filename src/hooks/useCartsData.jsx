import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCartsData = () => {
  const axiosSecure = useAxiosSecure();

  const { data: cartsData = [] } = useQuery({
    queryKey: ["cartsData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });

  return [cartsData];
};

export default useCartsData;
