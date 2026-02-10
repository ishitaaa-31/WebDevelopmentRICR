import React from "react";
import { FaShoppingCart, FaUsers, FaRupeeSign, FaStar } from "react-icons/fa";

const Overview = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "0",
      icon: <FaShoppingCart />,
      bgColor: "var(--color-primary)",
    },
    {
      title: "Active Orders",
      value: "0",
      icon: <FaUsers />,
      bgColor: "var(--color-secondary)",
    },
    {
      title: "Total Earnings",
      value: "₹0",
      icon: <FaRupeeSign />,
      bgColor: "var(--color-primary)",
    },
    {
      title: "Rating",
      value: "4.5",
      icon: <FaStar />,
      bgColor: "var(--color-accent)",
    },
  ];

  return (
    <div
      className="rounded-lg p-6 h-full overflow-y-auto space-y-6"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow-md p-6 border"
            style={{
              backgroundColor: "#fff",
              borderColor: "var(--color-primary)",
              color: "var(--color-text)",
            }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium opacity-80">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold mt-2">
                  {stat.value}
                </p>
              </div>
              <div
                className="p-4 rounded-lg text-2xl"
                style={{
                  backgroundColor: stat.bgColor,
                  color: "var(--color-text)",
                }}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Section */}
      <div
        className="rounded-lg shadow-md p-6 border"
        style={{
          backgroundColor: "#fff",
          borderColor: "var(--color-secondary)",
          color: "var(--color-text)",
        }}
      >
        <h2 className="text-xl font-bold mb-4">
          Recent Orders
        </h2>
        <div className="text-center py-8 opacity-70">
          No recent orders to display
        </div>
      </div>

      {/* Performance Chart Section */}
      <div
        className="rounded-lg shadow-md p-6 border"
        style={{
          backgroundColor: "#fff",
          borderColor: "var(--color-primary)",
          color: "var(--color-text)",
        }}
      >
        <h2 className="text-xl font-bold mb-4">
          Weekly Performance
        </h2>
        <div className="text-center py-8 opacity-70">
          Performance chart will be displayed here
        </div>
      </div>
    </div>
  );
};

export default Overview;
