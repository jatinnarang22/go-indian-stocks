"use client";
import { useState } from "react";

export default function NavbarPage() {
  const [open, setOpen] = useState(false);
  const [toggle, settoggle] = useState("false");

  const toggleSidebar = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="flex fixed h-full">
      {/* profile */}
      <div
        style={{ width: open ? "24rem" : "0px" }}
        className="bg-[rgb(30,55,95)] relative overflow-hidden"
      >
        <div className="flex items-center justify-around pt-3 pb-3">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12"
              src="/images/person.jpeg"
              alt="profile"
            />
            <p className="ml-3">John Doe</p>
          </div>
          <img
            className="bg-white rounded-full h-11 w-11"
            src="/images/bell.webp"
            alt="settings"
          />
        </div>
        <hr />
        {/* Discussion forum */}

        <div className="flex justify-around items-center mt-3 p-2  bg-[rgb(20,35,65)] ">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="discussion" />
            <p className="ml-3">Discussion Forum</p>
          </div>
          <button className="">
            {open ? <span>&larr;</span> : <span>&rarr;</span>}
          </button>
        </div>

        <div className=" p-3 pl-8">
          <p>Market stories</p>
          <p>Sentiment</p>
          <p>Market</p>
          <p>Sector</p>
          <p>Watchlist</p>
          <p>Events</p>
          <p>Newstlnterview</p>
        </div>
      </div>

      <div className="button flex justify-center items-center bg-[#f0f0f0]">
        <button
          className="bg-[rgb(30,55,95)]  p-1 h-20 text-white"
          onClick={toggleSidebar}
        >
          {open ? <span>&larr;</span> : <span>&rarr;</span>}
        </button>
      </div>
    </div>
  );
}
