import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import { BsShop } from "react-icons/bs";
import { RiGroup2Line } from "react-icons/ri";
import { SiFacebookgaming } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState("home");
  return (
    <nav className="bg-[#ffffff] shadow-md h-[55px] flex gap-5  items-center justify-between px-3">
      {/* logo section and search bar */}
      <div className="flex items-center gap-2 flex-1">
        <FaFacebook className="h-11 w-11 text-[#0866FF]" />
        <form className="text-black">
          <input
            type="text"
            placeholder="Search here"
            className="w-[200px] outline-none text-red-600 placeholder:text-gray-500 bg-gray-300 rounded-full px-2 py-2"
          />
        </form>
      </div>
      {/* navigation links */}
      <div className=" items-center text-3xl h-full py-1 text-gray-600 w-full flex-[2] justify-between px-5 sm:flex hidden ">
        <Link
          to={"/"}
          className={`h-full w-[17%] flex items-center justify-center  ${
            !(open === "home")
              ? "hover:bg-gray-200 rounded-lg border-transparent  border-b-[3px] "
              : "border-[#0866FF] border-b-[3px] text-[#0866FF]"
          }`}
          onClick={() => setOpen("home")}
        >
          {/* Your content here */}
          <GoHomeFill />
        </Link>

        <Link
          to={"/videos"}
          className={`h-full w-[17%] flex items-center justify-center  ${
            !(open === "videos")
              ? "hover:bg-gray-200 rounded-lg border-transparent  border-b-[3px] "
              : "border-[#0866FF] border-b-[3px] text-[#0866FF]"
          }`}
          onClick={() => setOpen("videos")}
        >
          <RxVideo />
        </Link>
        <Link className="h-full w-[17%]  hover:bg-gray-200 flex items-center justify-center rounded-lg">
          <BsShop />
        </Link>
        <Link className="h-full w-[17%]  hover:bg-gray-200 flex items-center justify-center rounded-lg">
          <RiGroup2Line />
        </Link>
        <Link className="h-full w-[17%]  hover:bg-gray-200 flex items-center justify-center rounded-lg ">
          <SiFacebookgaming />
        </Link>
      </div>
      {/* notification and profile, menu button */}
      <div className="flex items-center gap-5 text-4xl text-gray-800   flex-1  justify-end">
        <IoMenu className="cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full p-[6px] " />
        <AiFillMessage className="cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full p-[6px]  " />
        <IoNotifications className="cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full p-[6px] " />
        <RxAvatar className="cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full p-[6px] " />
      </div>
    </nav>
  );
}

export default Navbar;
