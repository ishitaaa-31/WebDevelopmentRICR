import React, { useEffect, useState } from "react";
import api from "../config/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const OrderNow = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAllRestaurant = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
         console.log("All Restaurants API Response:", res.data.data);
      setRestaurants(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurant();
  }, []);
  const handleResturantClick = (restaurantID) => {
    console.log("restaurant Clicked");
    console.log("OrderNow Page", restaurantID);

    navigate(`/restaurant/${restaurantID}`);
  };

  console.log(restaurants);
return (
  <>
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1
          className="text-5xl font-extrabold mb-3"
          style={{ color: "var(--color-text)" }}
        >
          Order Now 🍽️
        </h1>
        <p className="text-lg" style={{ color: "var(--color-text)", opacity: 0.7 }}>
          Discover great food near you and order instantly
        </p>

        {/* Decorative Line */}
        <div
          className="w-24 h-1 mx-auto mt-6 rounded-full"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
      </div>

      {/* Cards */}
      {restaurants?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant, idx) => (
            <div
              key={idx}
              onClick={() => handleResturantClick(restaurant._id)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={
                    restaurant.photo?.url ||
                    "https://source.unsplash.com/400x300/?restaurant,food"
                  }
                  alt={restaurant.restaurantName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300" />

                
              </div>

              {/* Content */}
              <div className="p-5">
                <h2
                  className="text-xl font-bold truncate mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {restaurant.restaurantName}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {restaurant.cuisine
                    .split(",")
                    .slice(0, 3)
                    .map((cuisine, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full capitalize font-medium transition"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          color: "#fff",
                        }}
                      >
                        {cuisine.toLowerCase()}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="text-center mt-16 text-xl"
          style={{ color: "var(--color-text)", opacity: 0.6 }}
        >
          No restaurants available 🍔
        </div>
      )}
    </div>
  </>
);

};

export default OrderNow;
