import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbChartTreemap } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";

const Sidebar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-2">
        <div className="text-xl font-bold p-2 flex gap-3 items-center"> <RxHamburgerMenu/>User dashboard</div>
        <hr />
        <div className="grid gap-3 p-3 ">
          <button
           className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap />
            Overview
          </button>
          <button
           className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("profile")}
          >
            {" "}
            <CgProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "order"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("order")}
          >
            <MdShoppingCart />
            Orders
          </button>
          <button
            className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "transaction"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("transaction")}
          >
            <TbTransactionRupee />
            Transactions
          </button>
          <button
            className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("helpdesk")}
          >
            {" "}
            <RiCustomerService2Fill />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
