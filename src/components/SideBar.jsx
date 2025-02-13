import React from "react";
import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="w-[25%] h-full flex-col p-2 gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[20%]  rounded flex flex-col justify-around">

      <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-5" src={assets.spotify_logo} alt="spotifyLogo" title="spotify"/>
          <p className="font-bold" title="spotify">Spotify</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-5" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-5" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[80%] rounded">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.pause_icon} alt="" />
          </div>
        </div>

        <div className="p-4 m-2 rounded bg-[#242424] font-semibold flex flex-col items-start justify-start gap-1 pl-4">
         <h1>Create Your First playlist</h1>
         <p className="font-light">It's easy we will help you</p>
         <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">Create Playlist</button>
        </div>

        
        <div className="p-4 m-2 rounded bg-[#242424] font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
         <h1>Let's find some Podcasts to follow</h1>
         <p className="font-light">We will keep you updates on new episodes</p>
         <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
