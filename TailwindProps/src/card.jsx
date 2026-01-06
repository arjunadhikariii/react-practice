
import React from "react";

function Card({
  userName = "Anonymous User",
  buttonTxt = "View Profile",
  imageUrl = "https://picsum.photos/301",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}) {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src={imageUrl}
        alt={userName}
        className="object-cover w-full h-72 rounded-t-md bg-gray-500"
      />

      <div className="flex flex-col justify-between p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">
            {userName}
          </h2>
          <p className="text-gray-400 text-sm">
            {description}
          </p>
        </div>

        {buttonTxt && (
          <button
            type="button"
            className="w-full p-3 font-semibold rounded-md bg-gray-800 hover:bg-gray-700 transition"
          >
            {buttonTxt}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
