import React from "react";
import { useState } from "react";

const AddItemModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    price: "",
    servingSize: "",
    cuisine: "",
    type: "",
    preparationTime: "",
    availability: true,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const handleImageChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    // console.log(files);
    // console.log(fileArray);
    let temp = [];
    fileArray.forEach((img) => {
      let imgURL = URL.createObjectURL(img);
      temp.push(imgURL);
    });
    setImagePreviews(temp.slice(0, 5));
    setImages(fileArray.slice(0, 5));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const form_data = new FormData();
      form_data.append("itemName", formData.itemName);
      form_data.append("description", formData.description);
      form_data.append("price", formData.price);
      form_data.append("servingSize", formData.servingSize);
      form_data.append("cuisine", formData.cuisine);
      form_data.append("type", formData.type);
      form_data.append("preparationTime", formData.preparationTime);
      form_data.append("availability", formData.availability);
      images.forEach((img) => {
        form_data.append("itemImages", img); //isi name se backend me call hoga router me by multer object
      });

      //trasnfer MenuData to formData
      const res = await api.post("/restaurant/addMenuItem", form_data);
      toast.success(res.data.message);

      setTimeout(handleClose, 1500);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to add menu item");
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    setFormData({
      itemName: "",
      description: "",
      price: "",
      category: "",
      cuisine: "",
      type: "",
      preparationTime: "",
      availability: true,
    });

    setImagePreviews([]);
    setImages([]);
    setErrors("");
    setLoading(false);

    onClose();
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex justify-between px-6 py-4 border-b border-gray-300 items-center sticky top-0 bg-white">
            <h2 className="text-xl font-semibold text-gray-800">
              Add Menu Item
            </h2>
            <button
              className="text-gray-600 hover:text-red-600 text-2xl transition"
              onClick={handleClose}
            >
              ⊗
            </button>
          </div>

          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            {/* Item Image Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                Item Image
              </h3>

              <div className="flex items-end gap-4">
                <label
                  htmlFor="itemImage"
                  className="px-6 w-fit py-2 bg-(--color-secondary) text-white rounded-md hover:bg-(--color-secondary-hover) cursor-pointer"
                >
                  Add Image
                </label>

                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">(Upto 5 images)</span>
                  <span className="text-gray-400 text-sm">
                    (Max size 1mb each)
                  </span>
                </div>

                <input
                  id="itemImage"
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Basic Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                Basic Information
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleInputChange}
                    placeholder="e.g., Butter Paneer Masala"
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Describe the dish, ingredients, and taste"
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Category */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                Pricing & Category
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Serving Size *
                  </label>
                  <input
                    type="text"
                    value={formData.servingSize}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cuisine
                  </label>
                  <input
                    type="text"
                    value={formData.cuisine}
                    onChange={handleInputChange}
                    placeholder="e.g., Indian, Italian"
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Item Attributes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                Item Attributes
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Food Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Type</option>
                    <option>Vegetarian</option>
                    <option>Non-Vegetarian</option>
                    <option>Vegan</option>
                    <option>Egg</option>
                    <option>Jain</option>
                    <option>Gluten-Free</option>
                    <option>Contains Nuts</option>
                    <option>Dairy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preparation Time (minutes) *
                  </label>
                  <input
                    value={formData.preparationTime}
                    onChange={handleInputChange}
                    type="number"
                    placeholder="e.g., 15"
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-end gap-3">
                  <input
                    type="checkbox"
                    checked={formData.availability}
                    onChange={handleInputChange}
                    id="availability"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Available
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-300">
              <button
                type="button"
                disabled={loading}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                onClick={handleClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⟳</span> Adding...
                  </>
                ) : (
                  "Add Menu Item"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItemModal;
