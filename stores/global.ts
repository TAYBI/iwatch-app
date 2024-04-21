import { defineStore } from "pinia";
import axios from "axios";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    currentUser: null,
  }),
  actions: {
    async getCurrentUser() {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          "https://iwatch-api.onrender.com/api/auth/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.data;
        this.currentUser = data;
      } catch (e) {
        console.error(e);
      }
    },
  },
});
