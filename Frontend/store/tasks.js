import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

export const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),

  fetchTasks: async () => {
    // const res = await fetch("http://localhost:5000/api/task/tasks");
    // const data = await res.json();
    // set({ tasks: data.data });

    let response;
    try {
      response = await axios.get("http://localhost:5000/api/task/tasks");
      if (response.data.success) {
        console.log(response.data.data);
        set({ tasks: response.data.data });
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error?.response?.data.message || error.message);
    }
  },

  createTask: async (taskData, navigate) => {
    axios.defaults.withCredentials = true;
    let response;
    try {
      response = await axios.post(
        "http://localhost:5000/api/task/createTask",
        taskData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.success) {
        console.log(response.data.data);
        set((state) => ({
          tasks: [...state.tasks, response.data.data],
        }));
        toast.success("Task created successfully");
        navigate("/dashboard");
      } else {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error?.response?.data.message || error.message);
      toast.error(error?.response?.data.message || error.message);
    }
  },
}));
