import React from "react";

function LeftSideBar({ icon, title, isImage, right }) {
  return (
    <div className="flex items-center gap-5 my-2 hover:bg-gray-300 rounded-lg pl-2 ">
      {isImage ? (
        <div className="relative">
          <img src={icon} alt="avatar" className="w-8 h-8 rounded-full" />
          {right && (
            <div className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></div>
          )}
        </div>
      ) : (
        <div className="text-3xl font-bold text-blue-600">{icon}</div>
      )}
      <h1 className="text-4xl  text-[16px] ">{title}</h1>
    </div>
  );
}

export default LeftSideBar;
