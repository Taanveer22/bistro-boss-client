import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

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
              <button className="btn btn-neutral mt-4" type="submit">
                Login
              </button>
            </fieldset>
          </form>
          <button
            onClick={handleGoogleBtn}
            className="btn btn-warning my-4 mx-4"
            type="submit"
          >
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
