import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { PiShareFat } from "react-icons/pi";

function Post({ data, name, image, group, profile, caption }) {
  return (
    <div className="bg-white w-full rounded-lg mt-6 pt-2 flex flex-col  gap-5">
      <div className="flex  gap-3 items-center justify-between px-3  ">
        <div className="flex  gap-3 items-center ">
          <img src={profile} alt="avatar" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <h1 className="font-semibold">{name || "Irfan Ullah"}</h1>
            <h1 className="text-gray-400 text-xs">{"40 minutes ago"}</h1>
          </div>
        </div>
        <div className="flex gap-4 ">
          <HiDotsHorizontal className="cursor-pointer hover:bg-gray-200 rounded-full h-10 w-10 p-2" />
          <RxCross2 className="cursor-pointer hover:bg-gray-100 rounded-full h-10 w-10 p-2" />
        </div>
      </div>
      <span className="px-3 text-gray-600 text-[15px]">{caption || ""}</span>
      <div className=" w-full">
        <img src={image} alt="image of post" className="w-full  object-cover" />
      </div>
      <div>
        {" "}
        <div className="w-full h-[1px] bg-gray-300  "></div>
        <div className="flex justify-between px-3 py-[1px] ">
          <div className=" h-11  hover:bg-gray-200 flex items-center rounded-lg px-2 gap-2 w-full justify-center ">
            <AiOutlineLike className="h-6 w-6" />
            <span>Like</span>
          </div>
          <div className=" h-11  hover:bg-gray-200 flex items-center gap-2 w-full justify-center rounded-lg px-2">
            <FaRegComment className="h-6 w-6" />
            <span>Comment</span>
          </div>
          <div className=" h-11  hover:bg-gray-200 flex items-center gap-2 w-full justify-center rounded-lg px-2">
            <BsWhatsapp className="h-6 w-6" />
            <span>send</span>
          </div>
          <div className=" h-11  hover:bg-gray-200 flex items-center gap-2 w-full justify-center rounded-lg px-2">
            <PiShareFat className="h-6 w-6" />
            <span>share</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mb-3 "></div>
      </div>
    </div>
  );
}

export default Post;
