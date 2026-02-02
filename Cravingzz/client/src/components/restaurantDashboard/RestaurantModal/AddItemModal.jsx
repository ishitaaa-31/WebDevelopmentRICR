import React from "react";
import { useState } from "react";

const AddItemModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    dishName: "",
    dishType: "",
    price: "",
    description: "",
    servingSize: "",
    cuisine: "",
  });

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-99">
        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
          <div className="flex justify-between px-6 py-4 border-b border-gray-300 items-center sticky top-0 bg-white">
            <h1>Add Items</h1>
            <button
              className="text-gray-600 hover:text-red-600 text-2xl transition"
              onClick={() => onClose()}
            >
              ⊗
            </button>
          </div>
          <form className="p-5">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="dishName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Dish Name
                </label>
                <input
                  type="text"
                  name="dish"
                  id="dishName"
                  placeholder="Enter dish name"
                  className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-between gap-4">
                <div className="w-full">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select dish type</option>
                    <option value="veg">veg</option>
                    <option value="non-veg">non-veg</option>
                    <option value="vegan">vegan</option>
                    <option value="jain">jain</option>
                    <option value="gluten-free">gluten-free</option>
                    <option value="dairy">dairy</option>
                    <option value="egg">egg</option>
                    <option value="contain-nuts">contain-nuts</option>
                  </select>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    name="dish"
                    id="price"
                    placeholder="Enter price (e.g. 199)"
                    className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="dish"
                  id="description"
                  placeholder="Short description of the dish"
                  className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-between gap-4">
                <div className="w-full">
                  <label
                    htmlFor="cuisine"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Cuisine
                  </label>
                  <select
                    id="cuisine"
                    name="cuisine"
                    className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select cuisine</option>
                    <option value="indian">Indian</option>
                    <option value="chinese">Chinese</option>
                    <option value="italian">Italian</option>
                    <option value="mexican">Mexican</option>
                    <option value="thai">Thai</option>
                    <option value="japanese">Japanese</option>
                    <option value="continental">Continental</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="korean">Korean</option>
                    <option value="american">American</option>
                  </select>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="servingSize"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Serving Size
                  </label>
                  <input
                    type="text"
                    name="dish"
                    id="servingSize"
                    placeholder="e.g. Serves 2"
                    className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItemModal;
