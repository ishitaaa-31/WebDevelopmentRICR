import React, { useState ,useEffect} from "react";
import Sidebar from "../../components/restaurantDashboard/Sidebar";
import Profile from "../../components/restaurantDashboard/Profile";
import Menu from "../../components/restaurantDashboard/Menu";
import Transactions from "../../components/restaurantDashboard/Transactions";
import OrdersManagement from "../../components/restaurantDashboard/OrdersManagement";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Overview from "../../components/restaurantDashboard/Overview";

const RestaurantDashboard = () => {
  const { role, isLogin } = useAuth();
    const [active, setActive] = useState("overview");
    const navigate = useNavigate();
    const [isCollapsed, setCollapsed] = useState(false);
  
    useEffect(() => {
      if (!isLogin) {
        navigate("/login");
      }
    });
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
          {active === "orderManagement" && <OrdersManagement />}
          {active === "transactions" && <Transactions />}
         
          {active === "menu" && <Menu />}
        </div>
      </div>
    </>
  )
}

export default RestaurantDashboard;