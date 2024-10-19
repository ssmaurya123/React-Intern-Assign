import React from "react";
import Circle from "../images/Circle.png";
import doublearr from "../images/doublearrow.png";
import LampOn from "../images/lamp-on.png";
import message from "../images/message.png";
import category from "../images/category.png";
import taskSquare from "../images/tasksquare.png";
import members from "../images/members.png";
import settings from "../images/settings.png";
import { CiSquarePlus } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="h-auto w-64 bg-white shadow-lg flex flex-col border border-[#DBDBDB] border-r-[1px] ">
      <div className="flex items-center">
        <div className="p-6 flex items-center">
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src={Circle}
            alt="Rounded avatar"
          />
          <h1 className="text-xl font-bold text-[#0D062D]">Project M.</h1>
        </div>
        <img
          className="w-[26px] h-[20px] border-2 border-white rounded-full dark:border-gray-800"
          src={doublearr}
          alt="Rounded avatar"
        />
      </div>

      <nav className="flex flex-col space-y-6 px-4">
        <div className="flex flex-col mt-6 space-y-7">
          <a
            href="/"
            className="flex items-center space-x-3 text-gray-600 hover:text-purple-600"
          >
            <img src={category} className="h-6 w-6" />
            <span className="inline-block h-[19px] w-[46px] mb-[5px]">
              Home
            </span>
          </a>
          <a
            href="#messages"
            className="flex items-center space-x-3 text-gray-600 hover:text-purple-600"
          >
            <img src={message} className="h-6 w-6" />

            <span className="inline-block h-[19px] w-[46px] mb-[5px]">
              Messages
            </span>
          </a>
          <a
            href="#tasks"
            className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 "
          >
            <img src={taskSquare} className="h-6 w-6" />
            <span className="inline-block h-[19px] w-[46px] mb-[5px]">
              Tasks
            </span>
          </a>
          <a
            href="#members"
            className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 "
          >
            <img src={members} className="h-6 w-6" />
            <span className="inline-block h-[19px] w-[46px] mb-[5px]">
              Members
            </span>
          </a>
          <a
            href="#settings"
            className="flex items-center space-x-3 text-gray-600 hover:text-purple-600"
          >
            <img src={settings} className="h-6 w-6" />
            <span className="inline-block h-[19px] w-[46px] mb-[5px]">
              Settings
            </span>
          </a>
        </div>

        <hr className="border-t-[1px] border-[#DBDBDB] w-[224px] mt-6 border-[1px]" />

        <div className="mt-6">
          <div className="flex justify-between">
            <h2 className="text-sm font-bold text-[#787846]">MY PROJECTS</h2>
            <CiSquarePlus className="text-[#787846]" />
          </div>

          <div className="flex flex-col space-y-4 mt-4">
            <div className="bg-[#5030E514] border rounded-md p-2">
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-3 ">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span className="text-[#0D062D] font-semibold">
                    Mobile App
                  </span>
                </span>
                <span className="text-[#0D062D]">•••</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
              <span>Website Redesign</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="h-2 w-2 rounded-full bg-purple-400"></span>
              <span>Design System</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              <span>Wireframes</span>
            </div>
          </div>
        </div>

        <div>
          {" "}
          <div className="p-2 mt-6 duration-700">
            <div className="rounded-[1rem] bg-[#F5F5F5] text-center p-4 space-y-4 relative">
              <div className="absolute flex items-center justify-center bottom-[85%] h-16 w-16 left-[50%] transform -translate-x-1/2 rounded-full bg-[#fdf6dd]">
                <img src={LampOn} className="w-8 h-8" />
              </div>
              <h3 className="font-medium capitalize">Thoughts time</h3>
              <p className="text-[#787486] font-normal text-sm">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <div className="bg-white py-2 px-6 font-medium text-sm rounded">
                Write a message
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
