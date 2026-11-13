import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";

const Login = () => {
  const { googleSigninUser, signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const captchaRef = useRef(null);
  const [disabledLogin, setDisabledLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location?.state?.from?.pathname || "/";

  const handleLoginForm = async (data) => {
    // console.log(data);
    const { email, password } = data;
    try {
      const result = await signInUser(email, password);
      console.log(result);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleBtn = async () => {
    try {
      const result = await googleSigninUser();
      console.log(result);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCaptchaValidation = () => {
    if (validateCaptcha(captchaRef.current.value) === true) {
      setDisabledLogin(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full min-w-sm lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Page</h1>
          <p className="py-6">
            New to here . Please{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>{" "}
            now .
          </p>
        </div>
        <div className="w-full min-w-sm lg:w-1/2 card bg-base-100  shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleLoginForm)} className="card-body">
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                {...register("email", { required: "email is required" })}
              />
              {errors.email && <p role="alert">{errors.email.message}</p>}

              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register("password", { required: "password is required" })}
              />
              {errors.password && <p role="alert">{errors.password.message}</p>}

              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                name="captcha"
                type="text"
                className="input"
                placeholder="Enter the text you see above"
              />
              <button
                onClick={handleCaptchaValidation}
                className="btn btn-success mt-4"
                type="button"
              >
                Validate Captcha
              </button>

              <button
                disabled={disabledLogin}
                className="btn btn-neutral mt-4"
                type="submit"
              >
                Login
              </button>
            </fieldset>
          </form>
          <button
            onClick={handleGoogleBtn}
            className="btn btn-warning my-4 mx-6"
            type="button"
          >
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
