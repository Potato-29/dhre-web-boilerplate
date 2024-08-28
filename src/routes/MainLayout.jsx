import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default MainLayout;
