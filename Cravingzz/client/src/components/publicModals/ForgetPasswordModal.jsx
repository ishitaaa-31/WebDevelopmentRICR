import React, { useState } from "react";
import toast from "react-hot-toast";

const ForgetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    cfNewPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);
      let res;
      if (isOtpSent) {
        if (isOtpVerified) {
          res = await api.post("/auth/forgetPassword", formData);
          toast.success(res.data.message);
          onClose();
        } else {
          res = await api.post("/auth/verifyOtp", formData);
          toast.success(res.data.message);
          setIsOtpSent(true);
          setIsOtpVerified(true);
        }
      } else {
        res = await api.post("/auth/genOtp", formData);
        toast.success(res.data.message);
        setIsOtpSent(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div>
        <div>
          <div>
            <h2>Reset Password</h2>
            <button
              className="text-gray-600 hover:text-red-600 text-2xl transition"
              onClick={() => onClose()}
            >
              ⊗
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-5">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address *
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your registered email"
                  disabled={isOtpSent}
                />
              </div>
              {isOtpSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    OTP*
                  </label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter OTP recieved in Email"
                    disabled={isOtpVerified}
                  />
                </div>
              )}
              {isOtpSent && isOtpVerified && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password*
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Enter your new password"
                      className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password *
                    </label>
                    <input
                      type="password"
                      name="cfNewPassword"
                      value={formData.cfNewPassword}
                      onChange={handleInputChange}
                      className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex justify-center mt-5">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">
                      <BsArrowClockwise />
                    </span>{" "}
                    Loading...
                  </>
                ) : isOtpSent ? (
                  isOtpVerified ? (
                    "Update Password"
                  ) : (
                    "Verify OTP"
                  )
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ForgetPasswordModal;
