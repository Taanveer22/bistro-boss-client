import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUpForm = async (data) => {
    const { email, password, name, photo } = data;
    // console.log(email, password, name, photo);
    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, photo);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full max-w-sm lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">
              Go to{" "}
              <Link to="/" className="text-blue-500">
                Homepage
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignUpForm)}
            className="w-full max-w-sm lg:w-1/2 card bg-base-100  shrink-0 shadow-2xl"
          >
            <div className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && <p role="alert">{errors.name.message}</p>}

                {/* photo url */}
                <label className="label">Photo</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Photo"
                  {...register("photo")}
                />
                {errors.photo && <p role="alert">{errors.photo.message}</p>}

                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  {...register("email", { required: "email is required" })}
                />
                {errors.email && <p role="alert">{errors.email.message}</p>}

                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                {errors.password && (
                  <p role="alert">{errors.password.message}</p>
                )}

                <button type="submit" className="btn btn-neutral mt-4">
                  Sign Up
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
