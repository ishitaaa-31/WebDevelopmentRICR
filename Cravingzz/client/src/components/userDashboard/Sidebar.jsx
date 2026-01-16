import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbChartTreemap } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";

const Sidebar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-2">
        <div className="text-xl font-bold p-2">User dashboard</div>
        <hr />
        <div className="grid gap-3 p-3 ">
          <button
            className="flex gap-3 items-center  "
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap />
            Overview
          </button>
          <button
            className="flex gap-3 items-center  "
            onClick={() => setActive("profile")}
          >
            {" "}
            <CgProfile />
            Profile
          </button>
          <button
            className="flex gap-3 items-center "
            onClick={() => setActive("order")}
          >
            <MdShoppingCart />
            Orders
          </button>
          <button
            className="flex gap-3  items-center"
            onClick={() => setActive("transaction")}
          >
            <TbTransactionRupee />
            Transactions
          </button>
          <button
            className="flex gap-3 items-center "
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
