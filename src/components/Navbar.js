import React from "react";
import imageGirl from "../images/imageGirl.png";
import calendarIcon from "../images/calendar-2.png";
import messagequestion from "../images/message-question.png";
import notification from "../images/notification.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white border-b-[1px] border-[#DBDBDB] p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <div className="ml-6 flex items-center border border-gray-300 bg-[#F5F5F5] px-4 py-2 w-96 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#787486] mr-2"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search for anything..."
            className="bg-[#F5F5F5] text-[#787486] w-full outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button>
          <img src={calendarIcon} className=" text-[#787846] w-6 h-6" />
        </button>
        <button>
          <img src={messagequestion} className=" text-[#787846] w-6 h-6" />
        </button>

        <button>
          <img src={notification} className=" text-[#787846] w-6 h-6" />
        </button>

        <div className="flex items-center space-x-2">
          <div dir="rtl">
            <span className="font-semibold">Palak Jain</span>
            <br />
            <span className="text-gray-500 text-sm">Rajasthan, India</span>
          </div>

          <img
            src={imageGirl}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <IoIosArrowDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
