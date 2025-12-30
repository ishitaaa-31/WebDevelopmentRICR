import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div> 
        <Header />
        <div>
           <Link to={"/login"}> <button className="bg-blue-700 text-white w-20 h-10 border rounded m-4">Login</button></Link>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
