import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import showMessage from "../../CustomHooks/hooks/showMessage";
import LoaderImg from "../../utils/Loader";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/authSlice';
import { updatePermissions } from '../../store/authSlice';
import type { AppDispatch } from '../../store/store';

const LoginPage: React.FC = () => {

  useEffect(() => {
    localStorage.clear(); // Clear localStorage on component mount for demo purposes
  }, []);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string()
        // .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),


    onSubmit: async (values) => {
      setLoading(true);

      try {
        const response = await fetch(`${baseUrl}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            return_type: "jwt",   // Add here
          }),
        });

        const data = await response.json();

        if (response.ok && data?.status === "success") {
          console.log("Login Response Data:", data);
          dispatch(loginSuccess(data?.data));
          dispatch(updatePermissions(data?.data?.user?.permissions));


          localStorage.setItem("user", JSON.stringify(data?.user));
          localStorage.setItem("access_token", data?.data?.access_token);

          showMessage("Login successful", "success");

          const dummyToken = "1234567890abcdef";
          localStorage.setItem("token", dummyToken);

          navigate("/");

        } else {
          showMessage(data?.message || "Login failed", "error");
        }

      } catch (error) {
        console.error("Login Error:", error);
        showMessage("An error occurred during login", "error");

      } finally {
        setLoading(false);
      }
    }

  });





  return (
    <>
      {loading ? <LoaderImg /> : null}
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
              {/* login */}
              <div className="mb-4">
                <label
                  htmlFor="login"
                  className="block mb-1 text-gray-600 font-medium"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="login"
                  name="login"
                  type="text"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
                  placeholder=" Email address"
                  value={formik.values.login}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.login && formik.errors.login && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.login}
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
                className="btn bg-primary font-semibold transition-colors  mx-auto block mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
