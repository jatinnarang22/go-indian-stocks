"use client";
import Data from "../Dummydata_Market/data.js";

export default function MarketStoriesPage() {
  return (
    <div
      className={`container ${
        localStorage.getItem("activetab") != "Market Stories" && "hidden"
      } md:block   flex-[2] lg:px-[8rem]`}
    >
      <ul className="m-auto">
        {Data.map((user, index) => (
          <li
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md m-3 "
          >
            <img
              className=" w-full  object-cover mb-4"
              src={user.img}
              alt={user.name}
            />
            <div className="flex flex-col flex-grow p-4">
              <p className="text-lg font-semibold mb-2">{user.name}</p>
              <p className="text-sm">{user.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
