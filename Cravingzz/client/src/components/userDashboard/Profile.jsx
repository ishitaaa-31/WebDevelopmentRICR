import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import ResetPasswordModal from "./modals/ResetPasswordModal"
const UserProfile = () => {
  const { user } = useAuth();

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);

  return (
    <>
      <div className="bg-(--color-primary)/10 rounded-lg shadow-md p-6 md:p-8 h-full">
        <div className="flex justify-between border p-3 rounded-3xl items-center border-gray-300 bg-white">
          <div>
            <div className="text-3xl text-(--color-primary) font-bold">
              {user.fullName || "User Name"}
            </div>
            <div className="text-gray-600 text-lg font-semibold">
              {user.email || "user@example.com"}
            </div>
            <div className="text-gray-600 text-lg font-semibold">
              {user.mobileNumber || "XXXXXXXXXX"}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="px-4 py-2 rounded bg-(--color-secondary) text-white"
              onClick={() => setIsEditProfileModalOpen(true)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 rounded bg-(--color-secondary) text-white"
              onClick={() => setIsResetPasswordModalOpen(true)}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
      {isResetPasswordModalOpen && (
        <ResetPasswordModal
          onClose={() => setIsResetPasswordModalOpen(false)}
        />
      )}
    </>
  );
};

export default UserProfile;
