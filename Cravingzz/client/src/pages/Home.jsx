import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const featuredRestaurants = [
    {
      id: 1,
      name: "Spice Kingdom",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "30-40 mins",
      image: "🏪",
    },
    {
      id: 2,
      name: "Pizza Paradise",
      cuisine: "Italian",
      rating: 4.3,
      deliveryTime: "25-35 mins",
      image: "🍕",
    },
    {
      id: 3,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.6,
      deliveryTime: "35-45 mins",
      image: "🥢",
    },
    {
      id: 4,
      name: "Burger Haven",
      cuisine: "American",
      rating: 4.4,
      deliveryTime: "20-30 mins",
      image: "🍔",
    },
  ];

  const popularDishes = [
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Spice Kingdom",
      price: 299,
      rating: 4.7,
      image: "🍛",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Paradise",
      price: 349,
      rating: 4.5,
      image: "🍕",
    },
    {
      id: 3,
      name: "Hakka Noodles",
      restaurant: "Dragon Wok",
      price: 249,
      rating: 4.6,
      image: "🍜",
    },
    {
      id: 4,
      name: "Classic Burger",
      restaurant: "Burger Haven",
      price: 199,
      rating: 4.4,
      image: "🍔",
    },
    {
      id: 5,
      name: "Tandoori Chicken",
      restaurant: "Spice Kingdom",
      price: 279,
      rating: 4.8,
      image: "🍖",
    },
    {
      id: 6,
      name: "Garlic Bread",
      restaurant: "Pizza Paradise",
      price: 99,
      rating: 4.3,
      image: "🥖",
    },
  ];

  return (
  <>
    {/* Hero Section */}
    <section
      className="relative text-white py-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(193,18,31,0.92), rgba(193,18,31,0.75))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Order Your Favorite Food
            </h1>

            <p className="text-lg md:text-xl text-white/90">
              Discover delicious meals from the best restaurants in your area.
              Fast delivery, great quality, amazing taste!
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => navigate("/order-now")}
                className="px-8 py-3 font-semibold rounded-lg transition duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text)",
                }}
              >
                Order Now
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3 font-semibold rounded-lg transition duration-300 border"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "#fff",
                }}
              >
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-white/80">Restaurants</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50K+</p>
                <p className="text-white/80">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-white/80">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center items-center">
            <div className="text-8xl animate-bounce">🍽️</div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Restaurants */}
    <section className="py-16" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Featured Restaurants
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our top-rated restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
            >
              <div
                className="h-40 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(193,18,31,0.15), rgba(193,18,31,0.25))",
                }}
              >
                <span className="text-6xl">{restaurant.image}</span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {restaurant.cuisine}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold">
                      {restaurant.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {restaurant.deliveryTime}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Popular Dishes */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Dishes
          </h2>
          <p className="text-gray-600 text-lg">
            Most loved meals by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div
                className="h-48 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,183,3,0.25), rgba(255,183,3,0.4))",
                }}
              >
                <span className="text-8xl">{dish.image}</span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {dish.restaurant}
                </p>

                <div className="flex justify-between items-center">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    ₹{dish.price}
                  </span>
                  <span className="flex items-center gap-1">
                    ⭐ {dish.rating}
                  </span>
                </div>

                <button
                  className="w-full mt-3 px-4 py-2 rounded-md font-medium transition"
                  style={{
                    backgroundColor: "var(--color-secondary)",
                    color: "#fff",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section
      className="py-16 text-white"
      style={{
        background:
          "linear-gradient(135deg, rgba(193,18,31,0.9), rgba(193,18,31,0.7))",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Order?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Enjoy delicious food delivered to your doorstep
        </p>

        <button
          onClick={() => navigate("/order-now")}
          className="px-8 py-3 font-semibold rounded-lg transition transform hover:scale-105"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text)",
          }}
        >
          Order Now
        </button>
      </div>
    </section>
  </>
);}
;
export default Home;