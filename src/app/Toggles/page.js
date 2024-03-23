"use client";
import React, { useState } from "react";

export default function Toggle() {
  const [activeTab, setActiveTab] = useState("Discussion");

  const handleToggle = (tab) => {
    const screenWidth = window.screen.width;
    console.log(tab);
    // console.log("Screen width:", screenWidth);
    if (localStorage.getItem("activetab") != tab) {
      if (screenWidth < 780) localStorage.setItem("activetab", tab);
      //   console.log(localStorage.getItem("activetab"));
      //   console.log(activeTab);
      window.location.reload();
    }
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-around text-white items-center mt-4">
      <button
        className={`bg-[rgb(30,55,95)] w-48 ${
          activeTab === "Discussion" && "bg-gray-800"
        }`}
        onClick={() => handleToggle("Discussion")}
      >
        Discussion form
      </button>
      <button
        className={`bg-[rgb(30,55,95)] w-48 ${
          activeTab === "Market Stories" && "bg-gray-800"
        }`}
        onClick={() => handleToggle("Market Stories")}
      >
        Market Stories Page
      </button>
    </div>
  );
}
