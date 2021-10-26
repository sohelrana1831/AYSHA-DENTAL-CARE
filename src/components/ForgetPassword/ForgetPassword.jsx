import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useAuth } from "./../Context/AuthContext";

const ForgetPassword = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { forgetPassword } = useAuth();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setError("");
      setLoading(true);
      await forgetPassword(data.email);
      setMessage("Please check your email for further instructions!");
    } catch (error) {
      setError("Failed to Reset Password!");
    }
    setLoading(false);
  };

  return (
    <>
      <Breadcrumbs title="Forget password" />
      <div className="container">
        <div
          className="flex gap-8 items-center justify-center "
          style={{ minHeight: "60vh" }}
        >
          <div
            className="inline-block border-2 border-gray-200 p-8 rounded-md shadow-lg"
            style={{ width: "450px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-Poppins text-center">
                Reset your password
              </h2>
              {error && <span className="text-red-600 py-2">{error}</span>}
              {message && (
                <span className="text-green-500 font-bold py-2">{message}</span>
              )}

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

              <button
                className="w-full bg-primary text-white mt-4 mb-4  py-2 px-4 rounded-md"
                type="submit"
              >
                submit
              </button>
            </form>
            <h1 className="py-4">
              Already have an account?
              <Link className="text-primary px-2" to="/login">
                Log in
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
