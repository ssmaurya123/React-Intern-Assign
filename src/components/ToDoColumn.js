import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import { FiMinus, FiPlus } from "react-icons/fi";

const ToDoColumn = ({ tasks, status }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName) {
      dispatch({
        type: "tasks/addTask",
        payload: {
          id: new Date().getTime(),
          name: taskName,
          description: description || "No description provided",
          status: status,
          priority: priority,
        },
      });
      setTaskName("");
      setDescription("");
      setPriority("High");
      setShowForm(false);
    }
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      dispatch({
        type: "tasks/moveTask",
        payload: {
          taskId: item.taskId,
          newStatus: status,
        },
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`p-4 w-full bg-gray-100 rounded-lg shadow-lg ${
        isOver ? "bg-blue-100" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center">
          <div className="w-3 h-3 bg-[#5030E5] rounded-full mr-2"></div>
          <h2 className="text-lg font-bold mr-2">{status}</h2>
          <span className="bg-[#E0E0E0] text-[#625F6D] rounded-full mt-1 px-2 text-sm">
            {tasks.length}
          </span>
        </div>

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? (
            <FiMinus className=" text-[#5030E5] w-[24px] h-[24px] rounded-md bg-[#CCCCFF]" />
          ) : (
            <FiPlus className=" text-[#5030E5]  w-[24px] h-[24px] rounded-md bg-[#CCCCFF]" />
          )}
        </button>
      </div>

      {showForm && (
        <div className="mb-4">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            className="border p-2 rounded-md w-full mb-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className="border p-2 rounded-md w-full mb-2"
          ></textarea>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border p-2 rounded-md w-full mb-2"
          >
            <option value="High">High</option>
            <option value="Completed">Completed</option>
            <option value="Low">Low</option>
          </select>

          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white p-2 rounded-md w-full"
          >
            Add Task
          </button>
        </div>
      )}
      <div className="h-0.5 bg-[#5030E5] w-full mb-4"></div>

      <div className="space-y-4">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default ToDoColumn;
