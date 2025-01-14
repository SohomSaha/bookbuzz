import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className="w-[600px] dark:bg-slate-900 dark:text-white">
          <div className="modal-box dark:bg-slate-900 dark:text-white bg-slate-400">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="dark:bg-slate-900 dark:text-white">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900 dark:text-white"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Contact Us</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="Name"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
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
                <span>Phone number</span>
                <br />
                <input
                  type="tel"
                  placeholder="Enter your number"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("tel", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    pattern: "^[6-9]d{9}$",
                  })}
                />
                <br />
                {errors.tel && (
                  <span className="text-sm text-red-500">
                    Enter a valid phone number
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <input
                  type="message"
                  placeholder="Enter your message here"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("message", { required: false })}
                />
                <br />
              </div>
              <div className="flex justify-around mt-6">
              <Link to="/">
                        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900">Submit</button>
                        </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
