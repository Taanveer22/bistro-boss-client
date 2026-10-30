import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const captchaRef = useRef(null);
  const [disabledLogin, setDisabledLogin] = useState(true);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  const handleGoogleBtn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
      navigate("/");
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
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLoginForm} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

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
            className="btn btn-warning my-4 mx-4"
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
