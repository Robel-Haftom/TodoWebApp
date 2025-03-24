import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),

  fetchTasks: async () => {
    const res = await fetch("http://localhost:5000/api/task/tasks");
    const data = await res.json();
    set({ tasks: data.data });
  },
}));
