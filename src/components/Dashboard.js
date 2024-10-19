import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./Filter";
import { filterTasks } from "../redux/tasksSlice";
import ToDoColumn from "./ToDoColumn";
import TaskColumn from "./TaskColumn";
import Today from "./Today";
import Share from "./Share";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaEquals } from "react-icons/fa";
import Ellipse12 from "../images/Ellipse 12.png";
import Ellipse13 from "../images/Ellipse 13.png";
import Ellipse14 from "../images/Ellipse 14.png";
import Ellipse15 from "../images/Ellipse 15.png";
import pen from "../images/pen.png";
import link from "../images/link.png";
import category2 from "../images/category.png";

import { MdOutlineAddBox } from "react-icons/md";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Dashboard = () => {
  const tasks = useSelector(
    (state) => state.tasks.filteredTasks || state.tasks.tasks
  );
  const dispatch = useDispatch();

  const todoTasks = tasks.filter((task) => task.status === "To Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  const handleFilterChange = (filters) => {
    dispatch(filterTasks(filters));
  };
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
    <div className="flex">
      {" "}
      <Sidebar />
      <div className="flex-grow flex flex-col">
        {" "}
        <Navbar />
        <div className="flex-grow p-8 bg-white min-h-screen">
          <div className="bg-white p-4 flex justify-between items-center -mt-7 pl-0">
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
                      <img
                        src={pen}
                        className="mt-1 w-[30px] h-[30px] rounded-md"
                      />
                    </button>
                    <button className="ml-2 text-gray-500 hover:text-gray-700">
                      <img
                        src={link}
                        className="mt-1 w-[30px] h-[30px] rounded-md"
                      />
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
          </div>

          <div className="flex justify-between mb-4 mt-7">
            <div className="flex items-center space-x-4">
              <Filter onFilterChange={handleFilterChange} />
              <Today />
            </div>
            <div className="flex items-center space-x-4">
              <Share />
              <PiLineVerticalThin className="h-[28px] w-[2px] bg-gray-500 mb-2" />
              <div className="w-10 rounded-md h-10 bg-[#5030E5] text-white p-3 mb-2">
                <FaEquals />
              </div>
              <img src={category2} className="w-[21px] h-[21px] mb-2" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-[42px]">
            <ToDoColumn tasks={todoTasks} status="To Do" />
            <TaskColumn
              title="On Progress"
              color="yellow-500"
              tasks={inProgressTasks}
              status="In Progress"
            />
            <TaskColumn
              title="Done"
              color="green-500"
              tasks={doneTasks}
              status="Done"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
