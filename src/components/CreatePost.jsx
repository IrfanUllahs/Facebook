import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";

function CreatePost() {
  return (
    <div className="bg-white w-full rounded-lg mt-6 h-32 px-3 pt-2 flex flex-col  gap-2">
      <div className="flex gap-3 items-center justify-center ">
        <img
          src="https://scontent.fisb4-1.fna.fbcdn.net/v/t39.30808-1/271209995_1526631444402584_8635796192478585454_n.jpg?stp=c0.7.40.40a_cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFBXFxsbsGYBClHF2p1eyO1wLBVGPNdrcnAsFUY812tyZ4i1QhiCGcn9dGphuyk6pnszdvqUwYocukOxcwyahcq&_nc_ohc=Lx53n2UofIcQ7kNvgEir2HV&_nc_ht=scontent.fisb4-1.fna&oh=00_AYA5iTgwB269JPwNMYsah25Ir9UuNSEk1wRTyAZPdhLHhg&oe=6679FB12"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <form className="w-full">
          <input
            type="text"
            placeholder="What's on your mind"
            className="bg-[#F0F2F5] rounded-full py-2 placeholder:text-gray-400 w-full pl-3"
          />
        </form>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mb-3 "></div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 font-semibold hover:bg-gray-200 cursor-pointer rounded-lg px-2 py-2 ">
          <RiVideoAddFill className="text-3xl text-[#f02849]" />
          <span>Live Video</span>
        </div>
        <div className="flex items-center gap-2 font-semibold  hover:bg-gray-200 cursor-pointer rounded-lg px-2 py-2 ">
          <MdPhotoLibrary className="text-3xl text-green-400" />
          <span>Photo/Video</span>
        </div>
        <div className="flex items-center gap-2 font-semibold  hover:bg-gray-200 cursor-pointer rounded-lg px-2 py-2 ">
          <PiVideoFill className="text-3xl text-[#f02849]" />
          <span>Reel</span>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
