import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const { id } = useParams();

  const [menuItems, setMenuItems] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [activeTab, setActiveTab] = useState("order");

  const fetchData = async () => {
    try {
      const res = await api.get(`/public/restaurant-menu/${id}/1`);
      const data = res.data.data;

      setMenuItems(data);

      if (data.length > 0) {
        setRestaurant(data[0].resturantID);
      }
    } catch (error) {
      toast.error("Failed to load restaurant");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto px-4 pb-10">
      {/* ================= RESTAURANT HEADER ================= */}
      {restaurant && (
        <div className="mt-6">
          <h1 className="text-3xl font-semibold">
            {restaurant.restaurantName}
          </h1>

          <p className="text-gray-600 mt-1">{restaurant.cuisine}</p>

          <p className="text-gray-500 text-sm">
            {restaurant.address}, {restaurant.city}
          </p>

          <p className="text-sm mt-1">📞 {restaurant.mobileNumber}</p>

          <span className="inline-block mt-2 text-green-600 font-medium">
            Open now
          </span>
        </div>
      )}

      {/* ================= IMAGE STRIP ================= */}
      <div className="grid grid-cols-4 gap-2 mt-6">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="h-40 bg-gray-200 rounded"></div>
        ))}
      </div>

      {/* ================= TABS ================= */}
      <div className="flex gap-6 border-b mt-8 text-gray-600 sticky top-0 bg-white z-10">
        {[
          { key: "overview", label: "Overview" },
          { key: "order", label: "Order Online" },
          { key: "reviews", label: "Reviews" },
          { key: "photos", label: "Photos" },
          { key: "menu", label: "Menu" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 ${
              activeTab === tab.key
                ? "border-b-2 border-red-500 text-red-500"
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= TAB CONTENT ================= */}

      {/* OVERVIEW */}
      {activeTab === "overview" && restaurant && (
        <div className="mt-6 text-gray-700 space-y-2">
          <p>
            <strong>Restaurant:</strong> {restaurant.restaurantName}
          </p>
          <p>
            <strong>Cuisine:</strong> {restaurant.cuisine}
          </p>
          <p>
            <strong>Address:</strong> {restaurant.address}
          </p>
          <p>
            <strong>City:</strong> {restaurant.city}
          </p>
          <p>
            <strong>Contact:</strong> {restaurant.mobileNumber}
          </p>
        </div>
      )}

      {/* ORDER ONLINE */}
      {activeTab === "order" && (
        <div className="flex mt-6 gap-6">
          {/* LEFT EMPTY (filters later) */}
          <div className="w-1/4 hidden md:block"></div>

          {/* RIGHT MENU */}
          <div className="w-full md:w-3/4">
  {menuItems.length > 0 ? (
    menuItems.map((item) => (
      <div
        key={item._id}
        className="flex justify-between gap-4 py-5 border-b"
      >
        {/* LEFT */}
        <div className="flex-1">
          <span
            className={`inline-block w-3 h-3 rounded-full mb-2 ${
              item.type === "veg" ? "bg-green-600" : "bg-red-600"
            }`}
          ></span>

          <h3 className="text-lg font-medium">{item.itemName}</h3>

          <p className="text-sm text-gray-500 mt-1">
            {item.description}
          </p>

          <p className="mt-2 font-medium">₹{item.price}</p>
        </div>

        {/* RIGHT – MENU ITEM IMAGE */}
        <div className="relative w-32 flex justify-center">
          {item.image?.url && (
            <img
              src={item.image.url}
              alt={item.itemName}
              className="w-32 h-24 object-cover rounded"
            />
          )}

          <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border px-6 py-1 text-green-600 font-medium rounded shadow">
            ADD
          </button>
        </div>
      </div>
    ))
 

                
              
            ) : (
              <p className="text-center text-gray-500 mt-10">
                No menu items available
              </p>
            )}
          </div>
        </div>
      )}

      {/* REVIEWS */}
      {activeTab === "reviews" && (
        <div className="mt-6 text-gray-500">No reviews yet.</div>
      )}

      {/* PHOTOS */}
      {activeTab === "photos" && (
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className="h-40 bg-gray-200 rounded"></div>
          ))}
        </div>
      )}

      {/* MENU TAB */}
      {activeTab === "menu" && (
        <div className="mt-6 text-gray-500">
          Menu images will be added soon.
        </div>
      )}
    </div>
  );
};

export default RestaurantDisplayMenu;
