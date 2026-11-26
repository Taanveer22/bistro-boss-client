import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

  useEffect(() => {
    //================ request interceptor ================
    const requestInterceptor = axiosSecure.interceptors.request.use(
      // 1st function
      function (config) {
        const token = localStorage.getItem("access-token");
        console.log("request stopped by interceptors", token);
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      // 2nd function
      function (error) {
        return Promise.reject(error);
      },
    );

    //================ response interceptor ================
    const responseInterceptor = axiosSecure.interceptors.response.use(
      // 1st function
      function (response) {
        return response;
      },
      // 2nd function
      async function (error) {
        console.log("response interceptor error", error);
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          await signOutUser();
          navigate("/login", { replace: true });
        }
        return Promise.reject(error);
      },
    );

    // ================  useEffect return ================
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, signOutUser]);

  // ================  component return ================
  return axiosSecure;
};

export default useAxiosSecure;
