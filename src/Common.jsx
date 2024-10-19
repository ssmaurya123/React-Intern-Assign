import React from "react";
import Ellipse12 from "./images/Ellipse 12.png";
import Ellipse13 from "./images/Ellipse 13.png";
import Ellipse15 from "./images/Ellipse 15.png";

function Common() {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      <img
        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
        src={Ellipse12}
        alt="Rounded avatar"
      />
      <img
        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
        src={Ellipse13}
        alt="Rounded avatar"
      />
      <img
        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
        src={Ellipse15}
        alt="Rounded avatar"
      />
    </div>
  );
}

export default Common;
