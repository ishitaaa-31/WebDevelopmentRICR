import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <h1></h1>
      </BrowserRouter>
    </>
  );
};

export default App;
