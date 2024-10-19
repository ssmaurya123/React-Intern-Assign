import { createSlice } from "@reduxjs/toolkit";

const defaultTasks = [];

if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(defaultTasks));
}

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")),
};
console.log("Loaded Tasks:", initialState.tasks);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTask: (state, action) => {
      const { taskId, newStatus } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.status = newStatus;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    filterTasks: (state, action) => {
      const { search, status } = action.payload;
      let filteredTasks = state.tasks;

      if (search) {
        filteredTasks = filteredTasks.filter((task) =>
          task.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (status) {
        filteredTasks = filteredTasks.filter((task) => task.status === status);
      }

      state.filteredTasks = filteredTasks;
    },
  },
});

export const { addTask, moveTask, filterTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
