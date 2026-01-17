import React, { useState } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Overview from "../../components/userDashboard/Overview";
import Profile from "../../components/userDashboard/Profile";
import Order from "../../components/userDashboard/Order";
import Transaction from "../../components/userDashboard/Transaction";
import HelpDesk from "../../components/userDashboard/HelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="w-full flex  h-[90vh]">
        <div
          className={`bg-(--color-background) ${isCollapsed ? "w-2/60" : "w-12/60"} duration-300`}
        >
          <Sidebar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setCollapsed={setCollapsed}
          />
        </div>
        <div className={`${isCollapsed ? "w-58/60" : "w-48/60"} duration-300`}>
          {active === "overview" && <Overview />}
          {active === "profile" && <Profile />}
          {active === "order" && <Order />}
          {active === "transaction" && <Transaction />}
          {active === "helpdesk" && <HelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
