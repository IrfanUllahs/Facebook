import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function Layout() {
  return (
    <div className="h-screen flex flex-col ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
