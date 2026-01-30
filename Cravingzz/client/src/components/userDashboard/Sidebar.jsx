import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbChartTreemap } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ active, setActive, isCollapsed, setCollapsed }) => {
  const { setUser, setIsLogin } = useAuth();
  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <CgProfile /> },
    { key: "order", title: "Orders", icon: <MdShoppingCart /> },
    {
      key: "transactions",
      title: "Transactions",
      icon: <TbTransactionRupee />,
    },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Fill /> },
  ];
  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      sessionStorage.removeItem("CravingUser"); //session storage se data hata denge  to logout hojayega
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-between h-full p-2">
        <div className="p-2">
          <div className=" h-10 text-xl font-bold p-2 flex gap-3 items-center">
            {" "}
            <button
              className="hover:scale-105"
              onClick={() => setCollapsed(!isCollapsed)}
            >
              {" "}
              <RxHamburgerMenu />
            </button>
            {!isCollapsed && (
              <span className="overflow-hidden text-nowrap">
                User dashboard
              </span>
            )}
          </div>
          <hr />
          {isCollapsed ? (
            <div className=" grid gap-3 py-6 space-y-2 w-full">
              {menuItems.map((item, idx) => (
                <button
                  className={`flex gap-3 items-center  p-2 rounded-xl text-base h-10 ${
                    active === item.key
                      ? "bg-(--color-secondary) text-white"
                      : "hover:bg-gray-100/70"
                  }`}
                  onClick={() => setActive(item.key)}
                  key={idx}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          ) : (
            <div className="grid gap-3 py-6 space-y-2  w-full h-10">
              {menuItems.map((item, idx) => (
                <button
                  className={`flex gap-3 items-center  p-2 rounded-xl text-base ${
                    active === item.key
                      ? "bg-(--color-secondary) text-white"
                      : "hover:bg-gray-100/70"
                  }`}
                  onClick={() => setActive(item.key)}
                  key={idx}
                >
                  {item.icon}
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <button
            className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 hover:bg-gray-100/70 hover:text-shadow-amber-50 text-(--color-text)"
            onClick={handleLogout}
          >
            <CiLogout />
            {!isCollapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
