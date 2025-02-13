import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome";

const Display = () => {
  return (
    <div className="w-[100%] m-2 mx-4 pt-6 rounded bg-[#121212] text-white overflow-auto] lg:w-[75%] lg:ml-0">
       <Routes>
        <Route path="/" element={<DisplayHome/>}/>
       </Routes>
    </div>
  );
};

export default Display;
