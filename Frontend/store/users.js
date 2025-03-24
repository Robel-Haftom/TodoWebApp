import { create } from "zustand";
import { toast } from "react-toastify";
import axios from "axios";

export const useUserStore = create((set) => ({
  user: null,
  setTasks: (user) => set({ user }),
  clearUser: () => set({ user: null }),

  fetchUserData: async () => {
    axios.defaults.withCredentials = true;
    let response;
    try {
      response = await axios.get("http://localhost:5000/api/user/data");

      if (response.data.success) {
        set({ user: response.data.data });
      } else {
        console.log("Error:", response.data.message);
      }
    } catch (error) {
      console.error(error?.response?.data.message || error.message);
    }
  },

  createUser: async (userData, navigate) => {
    axios.defaults.withCredentials = true;
    let response;

    try {
      response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data);

      if (response.data.success) {
        set({ user: response.data.data });
        navigate("/dashboard");
        toast.success(response.data.message);
      } else {
        console.log("Error:", response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error?.response?.data.message || error.message);
      toast.error(response.data.message);
    }
  },

  login: async (userData, navigate) => {
    axios.defaults.withCredentials = true;
    let response;

    try {
      response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Response:", response.data);

      if (response.data.success) {
        set({ user: response.data.data });
        navigate("/dashboard");
        toast.success(response.data.message);
      } else {
        console.log("Error:", response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error?.response?.data.message || error.message);
      toast.error(response.data.message);
    }
  },
}));
