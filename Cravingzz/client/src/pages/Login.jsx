import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import { useAuth } from "../context/AuthContext";
import ForgetPasswordModal from "../components/publicModals/ForgetPasswordModal"

const Login = () => {
  const { setUser, setIsLogin, setRole } = useAuth();
  const navigate = useNavigate();
  const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",

      password: "",
    });
  };

  // const validate = () => {
  //   let Error = {};

  //   if (
  //     !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
  //       formData.email,
  //     )
  //   ) {
  //     Error.email = "Use Proper Email Format";
  //   }

  //   setValidationError(Error);

  //   return Object.keys(Error).length > 0 ? false : true;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // if (!validate()) {
    //   setIsLoading(false);
    //   toast.error("Fill the Form Correctly");
    //   return;
    // }
    console.log(formData);

    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      setIsLogin(true);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      handleClearForm();
      switch (res.data.data.role) {
        case "manager": {
          setRole("manager");
          navigate("/restaurant-dashboard");
          break;
        }
        case "partner": {
          setRole("partner");
          navigate("/rider-dashboard");
          break;
        }
        case "customer": {
          setRole("customer");
          navigate("/user-dashboard");
          break;
        }
        case "admin": {
          setRole("admin");
          navigate("/admin-dashboard");
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className=" bg-(--color-background)  from-blue-50 to-indigo-100 py-6 px-4 relative h-screen w-full ">
        <div className="  max-w-xl mx-auto items-center justify-center">
          {/* Header */}

          <div className="text-center mb-8">
            <h1 className="text-4xl  text-(--color-text) font-bold mb-2">
              Login
            </h1>
            <p className="text-lg text-(--color-text) italic">Welcome Back!</p>
          </div>

          {/* Form Container */}
          <div className=" relative  w-full   rounded-xl shadow-2xl overflow-hidden">
            <img
              src={bg}
              alt=""
              className="absolute z-0 inset-0 w-full h-full object-cover opacity-70"
            />
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8 relative z-10 "
            >
              {/* Personal Information */}
              <div className="mb-10">
                <div className="space-y-4 ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full h-fit px-4 py-3 shadow  bg-(--color-background)   rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3   shadow bg-(--color-background) rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                  />
                </div>
                <div className="">Forgot Password?</div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-(--color-background)   text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-(--color-primary-hover) transition duration-300 transform hover:scale-105 disabled:scale-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-(--color-secondary) hover:bg-(--color-secondary-hover) text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg disabled:scale-100 disabled:bg-gray-300  disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting" : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-center text-gray-600 mt-8 text-sm">
            All fields marked are mandatory. We respect your privacy.
          </p>
        </div>
      </div>
      {isForgetPasswordModalOpen && (
        <ForgetPasswordModal onClose={(e) =>setIsForgetPasswordModalOpen(false)} />
      )}
    </>
  );
};

export default Login;
