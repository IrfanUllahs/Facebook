import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { RiGroup2Line } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { RxVideo } from "react-icons/rx";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
const LeftSideBarDataOne = [
  {
    icon: "https://scontent.fisb4-1.fna.fbcdn.net/v/t39.30808-1/271209995_1526631444402584_8635796192478585454_n.jpg?stp=c0.7.40.40a_cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFBXFxsbsGYBClHF2p1eyO1wLBVGPNdrcnAsFUY812tyZ4i1QhiCGcn9dGphuyk6pnszdvqUwYocukOxcwyahcq&_nc_ohc=Lx53n2UofIcQ7kNvgEir2HV&_nc_ht=scontent.fisb4-1.fna&oh=00_AYA5iTgwB269JPwNMYsah25Ir9UuNSEk1wRTyAZPdhLHhg&oe=6679FB12",
    title: "Irfan Ullah",
    isImage: true,
  },
  {
    icon: <IoIosPeople />,
    title: "Friends",
  },
  {
    icon: <MdOutlineFeedback />,
    title: "Feeds",
  },
  {
    icon: <RiGroup2Line />,
    title: "Groups",
  },
  {
    icon: <BsShop />,
    title: "Marketplace",
  },
  {
    icon: <RxVideo />,
    title: "Watch",
  },
];
const LeftSideBarDataTwo = [
  {
    title: "Sadam Sani",
    icon: "https://shorturl.at/IqG4q",
    isImage: true,
  },
  {
    title: "Our Games",
    icon: "https://shorturl.at/tE07i",
    isImage: true,
  },
  {
    title: "Lama Dev",
    icon: "https://shorturl.at/VRk55",
    isImage: true,
  },
  {
    title: "Lama Dev",
    icon: "https://shorturl.at/VRk55",
    isImage: true,
  },
  {
    title: "War of Surival",
    icon: "https://shorturl.at/sULdb",
    isImage: true,
  },
  {
    title: "Islamic Talks",
    icon: "https://shorturl.at/mo1xh",
    isImage: true,
  },
];
const RightSideBarDataOne = [
  {
    title: "Sadam Sani",
    icon: "https://i.pravatar.cc/50",
    isImage: true,
  },
  {
    title: "Our Games",
    icon: "https://avatar.iran.liara.run/public/34",
    isImage: true,
  },
  {
    title: "Lama Dev",
    icon: "https://avatar.iran.liara.run/public/45",
    isImage: true,
  },
  {
    title: "Lama Dev",
    icon: "https://avatar.iran.liara.run/public/46",
    isImage: true,
  },
  {
    title: "War of Surival",
    icon: "https://avatar.iran.liara.run/public/27",
    isImage: true,
  },
  {
    title: "Islamic Talks",
    icon: "https://avatar.iran.liara.run/public/40",
    isImage: true,
  },
];
const RightSideBarDataTwo = [
  {
    title: "Kaleem khan",
    icon: "https://avatar.iran.liara.run/public/23",
    isImage: true,
  },
  {
    title: "Kasuer Gul",
    icon: "https://avatar.iran.liara.run/public/26",
    isImage: true,
  },
  {
    title: "Hayat khan",
    icon: "https://avatar.iran.liara.run/public/21",
    isImage: true,
  },
  {
    title: "Saleem khan",
    icon: "https://avatar.iran.liara.run/public/12",
    isImage: true,
  },
  {
    title: "War of Surival",
    icon: "https://avatar.iran.liara.run/public/27",
    isImage: true,
  },
  {
    title: "Islamic Talks",
    icon: "https://avatar.iran.liara.run/public/40",
    isImage: true,
  },
  {
    title: "Shaukat khan",
    icon: "https://avatar.iran.liara.run/public/23",
    isImage: true,
  },
  {
    title: "Aman khan",
    icon: "https://avatar.iran.liara.run/public/26",
    isImage: true,
  },
  {
    title: "Hayat khan",
    icon: "https://avatar.iran.liara.run/public/21",
    isImage: true,
  },
];
const postsData = [
  {
    id: 1,
    profile: "https://avatar.iran.liara.run/public/41",
    name: "Rahul Kumar",
    image:
      "https://scontent.fisb4-2.fna.fbcdn.net/v/t39.30808-6/448880125_1229193625177868_5361617447845232298_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFcMRqcYa1nLak9yW2ysSQKlChYZvnreQCUKFhm-et5AJY8NuJ-VlJ-yQrHyy-BS39vZCpjBfj6yuIw3gwYYNaL&_nc_ohc=VahyuGmjfxQQ7kNvgHu7QFQ&_nc_zt=23&_nc_ht=scontent.fisb4-2.fna&oh=00_AYCHaz8RF8iBLyFMUZqkxubMaU_8Ro0Ff03BcFYZDKBv6Q&oe=667AD1A1",
    caption: "",
  },
  {
    id: 2,
    profile: "https://avatar.iran.liara.run/public/31",
    name: "Sohail Ahmad",
    image:
      "https://scontent.fisb4-1.fna.fbcdn.net/v/t39.30808-6/448832760_322571390902894_3130939379856976674_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFcWgVAziaRgoEWrWaqQ-kFG4BKVtX96PsbgEpW1f3o-05Mp9kYSPSJA0MCySREHgozzJqJwtG-ViRagV4M4ky7&_nc_ohc=JqHq1z12MaQQ7kNvgF1SqkU&_nc_zt=23&_nc_ht=scontent.fisb4-1.fna&oh=00_AYDQeX92RdiTOYffDY8Fh31Ughjw8BCKUnE0a4TXEQtwDQ&oe=667AE4C1",
    caption: "",
  },
  {
    id: 3,
    profile: "https://avatar.iran.liara.run/public/41",
    name: "Rahul Kumar",
    image:
      "https://scontent.fisb4-2.fna.fbcdn.net/v/t39.30808-6/448487295_122158692062060459_1509025582857306722_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCwettc-L7hhrbT-tQ2ikbE2Gl1m1xk5cTYaXWbXGTlwuEv8x7n2m8Pr722cAXFNIY9F9-ZuO1MB4RgC_Pr5dC&_nc_ohc=oidhu3H3saYQ7kNvgGhhIhb&_nc_zt=23&_nc_ht=scontent.fisb4-2.fna&oh=00_AYDEh8dQzZNPmtWtKAFu4o54tIbIdzLhxkF7zCBr_bSVZQ&oe=667B38B1",
    caption:
      "This batsman with avg of 23 and sr of 133 is the most dangerous batsman in Pakistan. If this is the stats of the most dangerous batsman then think about the others 😂😂 Most dangerous batsman from section d in this world cup11(7)13(😎 4(6) 5(9) Very dangerous saar very dangerous.",
  },
  {
    id: 4,
    profile:
      "https://scontent.fisb4-2.fna.fbcdn.net/v/t39.30808-1/442400209_410160658608415_6563240313462945717_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFOLWX5XI07zi8xs_I2-lFScXkowX6BmQ1xeSjBfoGZDb6Wot7HcA2SaaRFGFZt2KqjWCxJ1w4kdruP7P1fA9Ts&_nc_ohc=U4e2pFN7eKMQ7kNvgEjU9tl&_nc_ht=scontent.fisb4-2.fna&oh=00_AYBKAgZ6_fj2QmhmgNGmmt0-bkt0COAAuOsltEdoVQ_YSA&oe=667B2BFC",
    name: "Ali khan",
    image:
      "https://scontent.fisb4-1.fna.fbcdn.net/v/t39.30808-6/448642016_433387286285752_7024538084324716408_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHFM95Y1xv-McE27Kv-IZmrjbjh0R3CoV6NuOHRHcKhXvEuoOD4CR9oZNuT2JgViZczbaz6qy4ifJ59s5h3qyBZ&_nc_ohc=JUuU-qjt_fgQ7kNvgFb_lza&_nc_zt=23&_nc_ht=scontent.fisb4-1.fna&oh=00_AYBwO0BLNO-ygcJGDrBTbzOGQ9glyHhwxMBGH2xj_2nK9Q&oe=667B1BA3",
    caption:
      "If retired players can make a comeback, then Umar Akmal should also be given another welcome in the Pakistan Cricket Team. Pakistan has tried many finishers, but no one is close to the courage and class of Umar Akmal!.🔥✨ #cricket",
  },
  {
    id: 5,
    profile: "https://avatar.iran.liara.run/public/99",
    name: "Funny dunya",
    image:
      "https://scontent.fisb4-1.fna.fbcdn.net/v/t39.30808-6/448829000_8237079829659891_493066852234221434_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGaWECePhcXkBS0L9S-ewMU2fjrn3HUS2TZ-OufcdRLZEwDmMTB5KvX3CvtbyVyJoZ4ODH_HeP9p1xIgxr-EEuE&_nc_ohc=B4KgdONd6SsQ7kNvgHveOXp&_nc_zt=23&_nc_ht=scontent.fisb4-1.fna&oh=00_AYBWVh62n6im47_rD1eGX3ltrK8OGJou32h0uzEO2DSv-A&oe=667B33E3",
    caption: "😉😉😉",
  },
  {
    id: 5,
    profile: "https://avatar.iran.liara.run/public/18",
    name: "Pubg Mobile Pakistan",
    image:
      "https://scontent.fisb4-2.fna.fbcdn.net/v/t39.30808-6/448881958_7618242651604419_4516032435944890594_n.jpg?stp=dst-jpg_p552x414&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzZWYu_glOkgWENXiTHnprMwH22idjTJ8zAfbaJ2NMn7f9kMZjHGMEDVcqpSYFm-ZOt99vU37rdMB3gvm2IP9E&_nc_ohc=q_XfKFraPhQQ7kNvgG0cUo-&_nc_zt=23&_nc_ht=scontent.fisb4-2.fna&oh=00_AYC3lXxJToP8mu7uNa8qlJYkC7gQZJ8NJO1ETpe4P6e3HA&oe=667B141B",
    caption: "😉😉😉 Cool and logical",
  },
];
function Home() {
  return (
    <div className=" flex flex-1    overflow-hidden sidebar-content ">
      {/* left side contents are here */}
      <div className=" flex-1 md:block hidden pt-4 pl-3 overflow-y-auto sidebar-content ">
        {LeftSideBarDataOne.map((data) => (
          <LeftSideBar
            icon={data.icon}
            title={data.title}
            isImage={data.isImage || false}
          />
        ))}
        <div className="w-full h-[2px] bg-gray-300 mb-3 "></div>
        <span className="text-gray-500 font-semibold ml-3 ">Your Shorts</span>
        {LeftSideBarDataTwo.map((data) => (
          <LeftSideBar
            icon={data.icon}
            title={data.title}
            isImage={data.isImage || false}
          />
        ))}
      </div>
      {/* this is the middle, and main contents lies here */}
      <div className=" flex-[3] overflow-hidden  overflow-y-auto sidebar-content pb-4 ">
        <div className="max-w-[60%] mx-auto   ">
          <CreatePost />
          {postsData.map((data) => (
            <Post
              data={data.data}
              name={data.name}
              image={data.image}
              group={data.group}
              profile={data.profile}
              caption={data.caption}
            />
          ))}
        </div>
      </div>
      {/* right side contents are here */}
      <div className=" flex-1 md:block hidden pt-4 pl-3 overflow-y-auto sidebar-content mr-2 ">
        <span className="text-gray-500 font-semibold ml-3 ">Your Contacts</span>
        {RightSideBarDataOne.map((data) => (
          <LeftSideBar
            icon={data.icon}
            title={data.title}
            isImage={data.isImage || false}
            right={true}
          />
        ))}
        <div className="w-full h-[2px] bg-gray-300 mb-3 "></div>
        <span className="text-gray-500 font-semibold ml-3 ">Your Groups</span>
        {RightSideBarDataTwo.map((data) => (
          <LeftSideBar
            icon={data.icon}
            title={data.title}
            right={true}
            isImage={data.isImage || false}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
