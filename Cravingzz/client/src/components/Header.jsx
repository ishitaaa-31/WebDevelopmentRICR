import React from "react";
import transparent from "../assets/transparent.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-(--color-primary) px-2 py-0 flex justify-between items-center z-99">
        <Link to={"/"}>
          <img src={transparent} alt="" className="h-18 w-48 object-cover " />
        </Link>
        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none text-(--color-text) hover:text-(--color-accent) font-semibold"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-(--color-text) hover:text-(--color-accent) font-semibold"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-(--color-text) hover:text-(--color-accent) font-semibold"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-2">
          {isLogin ? (
            <div
              className="text-(--color-text) font-bold cursor-pointer pe-4"
              onClick={() => navigate("/user-dashboard")}
            >
              {user.fullName}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-(--color-secondary) text-(--color-text) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-(--color-secondary) text-(--color-text) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
