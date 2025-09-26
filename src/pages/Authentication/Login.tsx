import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {

useEffect(() => {
  localStorage.clear(); // Clear localStorage on component mount for demo purposes
  },[]);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
  onSubmit: (values) => {
  // Simulate login logic
  const dummyToken = "1234567890abcdef"; // replace with real token from API in real use
  localStorage.setItem("token", dummyToken); // store token in localStorage

  // Navigate to home
  navigate("/");
},

  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row max-w-3xl w-full h-full p-12 gap-8 md:gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center md:w-2/4">
          <img
            src="assets/icon/DPDP Logo Png with Trademark 1.svg"
            alt="Logo"
            className="mb-2"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-3/5 w-full flex flex-col justify-center">
          <h2 className="text-lg font-semibold mx-auto text-gray-700 mb-5">Login</h2>
          <form onSubmit={formik.handleSubmit}>
            {/* Username */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block mb-1 text-gray-600 font-medium"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                name="username"
                type="email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                placeholder=" Email address"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.username}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-1 text-gray-600 font-medium"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="flex justify-end mb-2">
              <button
                type="button"
                className="text-blue-700 hover:underline text-sm"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary font-semibold transition-colors hover:bg-blue-800 mx-auto block mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
