import React, { useState } from "react";
import { GrFormEdit } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";
import Ellipse12 from "../images/Ellipse 12.png";
import Ellipse13 from "../images/Ellipse 13.png";
import Ellipse15 from "../images/Ellipse 15.png";
import Ellipse14 from "../images/Ellipse 14.png";
import { IoLink } from "react-icons/io5";


const Header = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Mobile App");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
  <div className="flex items-center">
    {isEditing ? (
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className="text-2xl font-bold border border-gray-300 rounded p-1"
        autoFocus
      />
    ) : (
      <>
        <h1 className="text-[46px] font-semibold">{title}</h1>
        <div className="flex items-center mt-3 ml-4">
          <button
            onClick={handleEditClick}
            className="text-gray-500 hover:text-gray-700"
          >
            <GrFormEdit className="text-[#5030E5] bg-[#CCCCFF] mt-1 w-[30px] h-[30px] rounded-md" />
          </button>
          <button
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <IoLink className="text-[#5030E5] bg-[#CCCCFF] mt-1 w-[30px] h-[30px] rounded-md" />
          </button>
        </div>
      </>
    )}
  </div>

  <div className="flex -space-x-4 rtl:space-x-reverse">
    <div className="flex gap-1 mr-6 mt-2">
      <MdOutlineAddBox className="text-[#5030E5] bg-[#CCCCFF] mt-1" />
      <h3 className="text-[#5030E5]">Invite</h3>
    </div>
    <img
      className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
      src={Ellipse12}
      alt="Rounded avatar"
    />
    <img
      className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
      src={Ellipse14}
      alt="Rounded avatar"
    />
    <img
      className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
      src={Ellipse13}
      alt="Rounded avatar"
    />
    <img
      className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
      src={Ellipse15}
      alt="Rounded avatar"
    />
    <a
      className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-[#F4D7DA] border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
      href="/"
    >
      +2
    </a>
  </div>
</nav>
  );
};

export default Header;
