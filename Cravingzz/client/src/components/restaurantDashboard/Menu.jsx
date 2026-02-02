import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";


import AddItemModal from "./RestaurantModal/AddItemModal";

const Menu = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isAddItemModalOpen,setIsAddItemModalOpen] = useState(false);
  return (
    <>
      <div className="w-full overflow-hidden p-6">
        <div className="container shadow rounded-2xl flex justify-between px-12 py-4 text-xl">
            <div>Menu Management</div>
            <button className="flex gap-1"
            onClick={()=>setIsAddItemModalOpen(true)}>
                <span><FaPlus /></span>
                <span>Add Items</span>
            </button>
        </div>
      </div>
      {isAddItemModalOpen && (
        <AddItemModal onClose={() => setIsAddItemModalOpen(false)} />
      )}
    </>
  );
};

export default Menu;
