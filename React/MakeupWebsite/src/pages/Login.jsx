import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const Contact = () => {
    const [contactData, setContactData] = useState({
      userName: "",
      password: "",
      passwordCon: "",
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    };

    const handleClearForm = () => {
      setContactData({
        userName: "",
        password: "",
        passwordCon: "",
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(contactData);
      handleClearForm();
    };

    return (
      <>
        <Header />

        <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
          <div className="w-150  bg-white rounded shadow p-8">
            <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

            <form onReset={handleClearForm} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="userName" className="block mb-1">
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={contactData.userName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={contactData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="passwordCon" className="block mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="passwordCon"
                  name="passwordCon"
                  value={contactData.passwordCon}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="flex justify-center gap-5">
                <button
                  type="reset"
                  className="w-24 py-2 border-red-600 rounded bg-red-600 text-white hover:bg-white hover:text-black "
                >
                  Clear
                </button>

                <button
                  type="submit"
                  className="w-24 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Login
                </button>
              </div>

              <p className="text-center text-sm mt-6">
                Don’t have an account?{" "}
                <Link to="/signup" className="underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>

        <Footer />
      </>
    );
  };

  return <Contact />;
};

export default Login;
