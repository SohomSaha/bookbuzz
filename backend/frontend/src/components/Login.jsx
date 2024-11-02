import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in successfully");
          setTimeout(() => {
            document.getElementById("my_modal_3").close();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            window.location.reload();
          },3000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error(err.response.data.error);
        }
      });
  };
  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-700 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:hover:bg-pink-600"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
