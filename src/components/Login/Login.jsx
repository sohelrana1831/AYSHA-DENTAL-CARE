import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SocailLogin from "../SocailLogin/SocailLogin";
import { useAuth } from "./../Context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setError("");
      setLoading(true);
      await login(data.email, data.password);
      history.push(redirect_url);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Breadcrumbs title="Login" />
      <div className="container">
        <div
          className="flex gap-8 items-center justify-center "
          style={{ minHeight: "65vh" }}
        >
          <div
            className="inline-block border-2 border-gray-200 p-8 rounded-md shadow-lg"
            style={{ width: "450px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-Poppins text-center">
                Log In Your Account
              </h2>
              {error && <span className="text-red-600 py-2">{error}</span>}

              <div className="mt-4 mb-4">
                <label htmlFor="email">Email</label>
                <input
                  className="border border-gray-400 w-full px-4 py-2"
                  placeholder="Enter Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="mt-4 mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 w-full px-4 py-2"
                  {...register("password", { required: true })}
                />
                <Link
                  to="forget-password"
                  className="float-right text-secondary"
                >
                  Forget password?
                </Link>
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <button
                className="w-full bg-primary text-white mt-4 mb-4  py-2 px-4 rounded-md"
                type="submit"
              >
                submit
              </button>
              <h1 className="py-4">
                Don't Have an Account?
                <Link className="text-primary px-2" to="/register">
                  Register now
                </Link>
              </h1>
            </form>
            <SocailLogin title="Login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
