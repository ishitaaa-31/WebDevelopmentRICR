import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
     <div className="d-flex gap-3 justify-content-between p-1 bg-primary text-light align-items-center">
        <h3>
            My website
        </h3>
        <div className="d-flex gap-3 ">
           <Link to={"/"} className="text-light text-decoration-none">Home</Link>
           <Link to={"/About"} className="text-light text-decoration-none">About</Link>
           <Link to={"/Product"} className="text-light text-decoration-none">Product</Link>
           <Link to={"/Contact"} className="text-light text-decoration-none">Contact</Link>
        </div>
     </div>
    </>
  );
};
export default Header;
