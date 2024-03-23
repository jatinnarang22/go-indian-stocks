"use client";
import user from "../Dummydata_Dessucssion/data.js";

export default function DiscussionPage() {
  return (
    <div
      className={`flex-[3]  ${
        localStorage.getItem("activetab") != "Discussion" && "hidden"
      } ml-10 md:block `}
    >
      <ul className="">
        {user.map((user, index) => (
          <li
            className="flex   border-2 rounded-md mt-7 border-s-white shadow-xl md:p-4 lg:p-7"
            key={index}
          >
            <img
              className="rounded-full h-9 w-9 mr-3"
              src={user.img}
              alt={user.name}
            />
            <div className="flex-grow">
              <p className="mb-1">{user.name}</p>
              <p className="mb-1">{user.details}</p>
            </div>
            <p className="ml-auto mr-3 text-blue-950 flex-shrink-0">
              2 min ago
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
