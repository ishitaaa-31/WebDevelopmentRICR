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
      <div className="bg-gray-50 min-h-screen p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Order Now 🍽️
          </h1>
          <p className="text-gray-600 mt-2">
            Discover great food near you and order instantly
          </p>
        </div>

        {/* Cards */}
        {restaurants?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant, idx) => (
              <div
                key={idx}
                onClick={() => handleResturantClick(restaurant._id)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img
                    src={
                      restaurant.photo?.url ||
                      "https://source.unsplash.com/400x300/?restaurant,food"
                    }
                    alt={restaurant.restaurantName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {restaurant.restaurantName}
                  </h2>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {restaurant.cuisine
                      .split(",")
                      .slice(0, 3)
                      .map((cuisine, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full capitalize"
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
          <div className="text-center text-gray-500 mt-10">
            No restaurants available 🍔
          </div>
        )}
      </div>
    </>
  );
};

export default OrderNow;
