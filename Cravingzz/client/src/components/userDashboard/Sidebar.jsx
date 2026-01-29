import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbChartTreemap } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import api from "../../config/Api";

const Sidebar = ({ active, setActive, isCollapsed, setCollapsed }) => {
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
  return (
    <>
      <div className="flex flex-col justify-between">
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
          <div>
            <button className="flex gap-3 items-center rounded ">
              <CiLogout />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
