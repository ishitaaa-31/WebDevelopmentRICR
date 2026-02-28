import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const location = useLocation();
  const { isLogin, role } = useAuth();
  const navigate = useNavigate();
  const data = location.state;

  // ---------- FIX REFRESH PROBLEM ----------
  const [restaurantData, setRestaurantData] = useState(
    location.state || JSON.parse(sessionStorage.getItem("selectedRestaurant")),
  );
  const [loading, setLoading] = useState(false);

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [cartFlag, setCartFlag] = useState([]);

  const id = restaurantData?._id;

  const [menuItems, setMenuItems] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [activeTab, setActiveTab] = useState("order");

  // Save restaurant when coming from OrderNow
  useEffect(() => {
    if (location.state) {
      sessionStorage.setItem(
        "selectedRestaurant",
        JSON.stringify(location.state),
      );
      setRestaurantData(location.state);
    }
  }, [location.state]);

  // ---------- FETCH MENU ----------
  const fetchData = async () => {
    if (!id) return;
    try {
      const res = await api.get(`/public/restaurant-menu/${id}/1`);
      const result = res.data.data;

      setMenuItems(result);

      if (result.length > 0) {
        setRestaurant(result[0].resturantID);
      }
    } catch (error) {
      toast.error("Failed to load restaurant");
    }
  };
  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart();
    setCartFlag([]);
  };

  // ---------- CART LOGIC ----------
  const handleAddToCart = (NewItem) => {
    if (cart) {
     if (cart.resturantID === NewItem.resturantID) {
        setCart((prev) => ({
          ...prev,
          cartItem: [...prev.cartItem, { ...NewItem, quantity: 1 }],
          cartValue: Number(prev.cartValue) + Number(NewItem.price),
        }));
        setCartFlag((prev) => [...prev, NewItem._id]);
      } else {
        toast.error("Clear the cart first");
      }
    } else {
      setCart({
      resturantID: NewItem.resturantID,
        cartItem: [{ ...NewItem, quantity: 1 }],
        cartValue: Number(NewItem.price),
      });
      setCartFlag((prev) => [...prev, NewItem._id]);
    }
  };

  const handleCheckout = () => {
    if (isLogin && role === "customer") {
      localStorage.setItem("cart", JSON.stringify(cart));
      navigate("/checkout-page");
    } else {
      toast.error("Please Login as Customer");
      navigate("/login");
    }
  };

  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchData();
  }, [id]);

  // ---------- IMAGES ----------
  const menuImages = menuItems
    .flatMap((item) => item.images?.map((img) => img.url) || [])
    .filter(Boolean);

  const headerImages = restaurant?.photos?.length
    ? restaurant.photos.map((img) => img.url)
    : restaurant?.photo?.url
      ? [restaurant.photo.url]
      : [];

  return (
    <div
      className="max-w-6xl mx-auto px-4 pb-28"
      style={{
        background: "var(--color-background)",
        color: "var(--color-text)",
      }}
    >
      {/* ================= RESTAURANT HEADER ================= */}
      {restaurant && (
        <div className="mt-6">
          <h1 className="text-3xl font-bold tracking-wide">
            {restaurant.restaurantName}
          </h1>

          <p
            className="mt-1 font-medium"
            style={{ color: "var(--color-secondary)" }}
          >
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
            <div
              key={i}
              className="h-40 rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition"
            >
              <img
                src={img}
                alt={`Restaurant Image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* ================= TABS ================= */}
      <div className="flex gap-6 border-b mt-8 sticky top-0 bg-(--color-background) z-10 backdrop-blur-md">
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

      {/* ================= ORDER ONLINE ================= */}
      {activeTab === "order" && (
        <div className="flex mt-6 gap-6">
          <div className="w-1/4 hidden md:block"></div>

          <div className="w-full md:w-3/4">
            {menuItems.length > 0 ? (
              menuItems.map((item) => {
                const itemImage = item.images?.[0]?.url || null;

                return (
                  <div
                    key={item._id}
                    className="flex justify-between gap-4 py-6 border-b border-[rgba(0,0,0,0.06)]"
                  >
                    {/* LEFT */}
                    <div className="flex-1">
                      <span
                        className="inline-block w-3 h-3 rounded-full mb-2"
                        style={{
                          background: item.type === "veg" ? "green" : "red",
                        }}
                      ></span>

                      <h3 className="text-lg font-semibold">{item.itemName}</h3>

                      <p className="text-sm opacity-70 mt-1">
                        {item.description}
                      </p>
                      <p className="text-sm opacity-70 mt-1">
                        Serving Size: {item.servingSize} person
                      </p>
                      <p className="text-sm opacity-70 mt-1">
                        Preparation Time: {item.preparationTime} Minutes
                      </p>

                      <p
                        className="mt-2 font-semibold text-lg"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        ₹{item.price}
                      </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative w-32 flex justify-center">
                      {itemImage ? (
                        <img
                          src={itemImage}
                          alt={item.itemName}
                          className="w-32 h-24 object-cover rounded-lg shadow-md"
                        />
                      ) : (
                        <div className="w-32 h-24 bg-gray-200 rounded flex items-center justify-center text-xs">
                          No Image
                        </div>
                      )}

                      {/* ADD BUTTON */}
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={cartFlag.includes(item._id)}
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-7 py-1.5 font-semibold rounded-full shadow-md transition-all duration-200"
                        style={{
                          background: cartFlag.includes(item._id)
                            ? "#ccc"
                            : "var(--color-secondary)",
                          color: cartFlag.includes(item._id) ? "#666" : "white",
                        }}
                      >
                        {cartFlag.includes(item._id) ? "Added" : "ADD"}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center opacity-60 mt-10">
                No menu items available
              </p>
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
              <div
                key={i}
                className="h-40 rounded-xl overflow-hidden shadow hover:scale-[1.03] transition"
              >
                <img
                  src={imgUrl}
                  alt={`Menu Photo ${i + 1}`}
                  className="w-full h-full object-cover"
                />
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

      {cart && cart.cartItem.length > 0 && (
  <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-50">
    <div className="bg-(--color-secondary-hover) rounded-3xl shadow-lg flex items-center justify-between py-3 px-6 border border-(--color-secondary)">

      {/* Left: Items count and total */}
      <div className="flex items-center gap-4">
        <span className="bg-(--color-primary) text-white px-3 py-1 rounded-full font-semibold text-sm">
          {cart.cartItem.length} {cart.cartItem.length === 1 ? "item" : "items"}
        </span>
        <span className="text-(--color-text) font-semibold text-sm">
          ₹ {cart.cartValue}
        </span>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-3">
        {/* Clear Cart */}
        <button
          onClick={handleClearCart}
          className="bg-(--color-danger) hover:bg-(--color-danger-dark) text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-sm"
        >
          Clear
        </button>

        {/* Checkout */}
        <button
          onClick={handleCheckout}
          className="bg-(--color-primary) hover:bg-(--color-primary-dark) text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default RestaurantDisplayMenu;
