import React from "react";
import { useDrag } from "react-dnd";
import { RiMessage2Line } from "react-icons/ri";
import { FiFileMinus } from "react-icons/fi";
import Common from "../Common";

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { taskId: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  let priorityStyle = {
    backgroundColor: "transparent",
    color: "inherit",
  };

  if (task.priority === "Low") {
    priorityStyle = {
      backgroundColor: "#DFA87433",
      color: "#D58D49",
    };
  } else if (task.priority === "Completed") {
    priorityStyle = {
      backgroundColor: "#83C29D33",
      color: "#68B266",
    };
  } else if (task.priority === "High") {
    priorityStyle = {
      backgroundColor: "#D8727D1A",
      color: "#D8727D",
    };
  }

  return (
    <div
      ref={drag}
      className={`p-4 border rounded-md bg-white shadow-md ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <span
        className="mb-1 p-1 rounded-[4px] inline-block" 
        style={priorityStyle} 
      >
        {task.priority}
      </span>
      <div className="flex justify-between items-center">
        <h3 className="text-[#0D062D] font-bold">{task.name}</h3>
        <div className="flex gap-0.5">
          <div className="w-1 h-1 bg-[#0D062D] rounded-full"></div>
          <div className="w-1 h-1 bg-[#0D062D] rounded-full"></div>
          <div className="w-1 h-1 bg-[#0D062D] rounded-full"></div>
        </div>
      </div>
      <p className="text-[#787486] mt-3">{task.description}</p>
      <div className="flex justify-between items-center mt-3">
        <Common />
        <div className="flex ml-14 gap-1">
          <RiMessage2Line className="text-[#787486] mt-1.5" />
          <h3 className="text-[#787486]">12 comments</h3>
        </div>
        <div className="flex size-sm gap-1">
          <FiFileMinus size={14} className="text-[#787486] mt-1.5" />
          <h3 className="text-[#787486]">0 files</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
