import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
const Profile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState("");
  const { user } = useAuth();
  return (
    <>
      <div className="flex gap-10">
        <div>
          <span>Name:</span> <span>{user.fullName}</span>
        </div>
        <div>
          <span>Email:</span> <span>{user.email}</span>
        </div>
        <div>
          <span>Phone no:</span> <span>{user.mobileNumber}</span>
        </div>
        <button
          className="bg-(--color-primary) p-3.5 m-1 rounded-xl"
          onClick={() => setIsEditProfileModalOpen(true)}
        >
          Edit Profile
        </button>
      </div>
      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default Profile;
