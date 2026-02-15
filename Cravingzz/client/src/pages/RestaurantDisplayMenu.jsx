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

  // Prepare all menu images for Photos tab
  const menuImages = menuItems
    .flatMap((item) => item.images?.map((img) => img.url) || [])
    .filter(Boolean);

  // Header images strip (if restaurant has photos array, else fallback to restaurant.photo.url)
  const headerImages = restaurant?.photos?.length
    ? restaurant.photos.map((img) => img.url)
    : restaurant?.photo?.url
    ? [restaurant.photo.url]
    : [];

  return (
  <div className="max-w-6xl mx-auto px-4 pb-10" style={{ background: "var(--color-background)", color: "var(--color-text)" }}>

    {/* ================= RESTAURANT HEADER ================= */}
    {restaurant && (
      <div className="mt-6">
        <h1 className="text-3xl font-bold tracking-wide">
          {restaurant.restaurantName}
        </h1>

        <p className="mt-1 font-medium" style={{ color: "var(--color-secondary)" }}>
          {restaurant.cuisine}
        </p>

        <p className="text-sm opacity-80 mt-1">
          {restaurant.address}, {restaurant.city}
        </p>

        <p className="text-sm mt-1">📞 {restaurant.mobileNumber}</p>

        <span
          className="inline-block mt-3 px-3 py-1 text-sm rounded-full font-medium"
          style={{
            background: "rgba(255,183,3,0.15)",
            color: "var(--color-primary)",
          }}
        >
          Open now
        </span>
      </div>
    )}

    {/* ================= IMAGE STRIP BELOW HEADER ================= */}
    {headerImages.length > 0 && (
      <div className="grid grid-cols-4 gap-3 mt-6">
        {headerImages.map((img, i) => (
          <div key={i} className="h-40 rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition">
            <img src={img} alt={`Restaurant Image ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    )}

    {/* ================= TABS ================= */}
    <div className="flex gap-6 border-b mt-8 sticky top-0 bg-[var(--color-background)] z-10 backdrop-blur-md">
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
          className="pb-3 font-medium transition"
          style={
            activeTab === tab.key
              ? {
                  borderBottom: "3px solid var(--color-secondary)",
                  color: "var(--color-secondary)",
                }
              : { opacity: 0.7 }
          }
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* ================= OVERVIEW ================= */}
    {activeTab === "overview" && restaurant && (
      <div className="mt-6 space-y-2 leading-relaxed">
        <p><strong>Restaurant:</strong> {restaurant.restaurantName}</p>
        <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
        <p><strong>Address:</strong> {restaurant.address}</p>
        <p><strong>City:</strong> {restaurant.city}</p>
        <p><strong>Contact:</strong> {restaurant.mobileNumber}</p>
      </div>
    )}

    {/* ================= ORDER ONLINE ================= */}
    {activeTab === "order" && (
      <div className="flex mt-6 gap-6">
        <div className="w-1/4 hidden md:block"></div>

        <div className="w-full md:w-3/4">
          {menuItems.length > 0 ? (
            menuItems.map((item) => {
              const itemImage = item.images?.[0]?.url || null;

              return (
                <div key={item._id} className="flex justify-between gap-4 py-6 border-b border-[rgba(0,0,0,0.06)]">

                  {/* LEFT */}
                  <div className="flex-1">
                    <span
                      className="inline-block w-3 h-3 rounded-full mb-2"
                      style={{ background: item.type === "veg" ? "green" : "red" }}
                    ></span>

                    <h3 className="text-lg font-semibold">{item.itemName}</h3>

                    <p className="text-sm opacity-70 mt-1">{item.description}</p>
                    <p className="text-sm opacity-70 mt-1">Serving Size: {item.servingSize} person</p>
                    <p className="text-sm opacity-70 mt-1">Preparation Time: {item.preparationTime} Minutes</p>

                    <p className="mt-2 font-semibold text-lg" style={{ color: "var(--color-secondary)" }}>
                      ₹{item.price}
                    </p>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative w-32 flex justify-center">
                    {itemImage ? (
                      <img src={itemImage} alt={item.itemName} className="w-32 h-24 object-cover rounded-lg shadow-md" />
                    ) : (
                      <div className="w-32 h-24 bg-gray-200 rounded flex items-center justify-center text-xs">
                        No Image
                      </div>
                    )}

                    <button
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-1 font-semibold rounded-full shadow-md transition"
                      style={{
                        background: "var(--color-secondary)",
                        color: "white",
                      }}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center opacity-60 mt-10">No menu items available</p>
          )}
        </div>
      </div>
    )}

    {/* REVIEWS */}
    {activeTab === "reviews" && (
      <div className="mt-6 opacity-70">No reviews yet.</div>
    )}

    {/* PHOTOS */}
    {activeTab === "photos" && (
      <div className="grid grid-cols-3 gap-4 mt-6">
        {menuImages.length > 0 ? (
          menuImages.map((imgUrl, i) => (
            <div key={i} className="h-40 rounded-xl overflow-hidden shadow hover:scale-[1.03] transition">
              <img src={imgUrl} alt={`Menu Photo ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))
        ) : (
          <div className="h-40 bg-gray-200 rounded col-span-3"></div>
        )}
      </div>
    )}

    {/* MENU TAB */}
    {activeTab === "menu" && (
      <div className="mt-6 opacity-70">Menu images will be added soon.</div>
    )}
  </div>
);

};

export default RestaurantDisplayMenu;

