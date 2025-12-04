import React, { useEffect } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Works from "../pages/MyWork/MyWork";
import TOS from "../pages/TermOfService/TermOfService";
import Contact from "../pages/ContactPage/ContactPage"

const Router = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Comm" element={<Works />} />
      <Route path="/tos" element={<TOS />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
