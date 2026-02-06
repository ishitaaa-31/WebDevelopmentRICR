import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    
    console.log(formData);

    try {
      const res = await api.post("/public/new-contact", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <>
    <div
      className="min-h-screen py-6 px-4"
      style={{
        background: "linear-gradient(to bottom right, var(--color-background), #ffffff)",
      }}
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            Post your query here
          </h1>
          <p
            className="text-lg italic"
            style={{ color: "rgba(43, 29, 29, 0.7)" }}
          >
            We are here to help you...
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <form
            onSubmit={handleSubmit}
            onReset={handleClearForm}
            className="p-8"
          >
            {/* Inputs */}
            <div className="mb-10 space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition disabled:cursor-not-allowed disabled:bg-gray-200"
                style={{
                  borderColor: "rgba(43, 29, 29, 0.2)",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition disabled:cursor-not-allowed disabled:bg-gray-200"
                style={{
                  borderColor: "rgba(43, 29, 29, 0.2)",
                }}
              />

              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                maxLength="10"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition disabled:cursor-not-allowed disabled:bg-gray-200"
                style={{
                  borderColor: "rgba(43, 29, 29, 0.2)",
                }}
              />

              <textarea
                name="message"
                placeholder="Type your Query"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition disabled:cursor-not-allowed disabled:bg-gray-200"
                style={{
                  borderColor: "rgba(43, 29, 29, 0.2)",
                }}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
              <button
                type="reset"
                disabled={isLoading}
                className="flex-1 font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "rgba(43, 29, 29, 0.1)",
                  color: "var(--color-text)",
                }}
              >
                Clear Form
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg disabled:scale-100 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "#1a1a1a",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-primary-hover)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-primary)")
                }
              >
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p
          className="text-center mt-8 text-sm"
          style={{ color: "rgba(43, 29, 29, 0.6)" }}
        >
          All fields marked are mandatory. We respect your privacy.
        </p>
      </div>
    </div>
  </>
);

};

export default Contact;
