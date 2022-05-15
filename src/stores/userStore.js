import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      uid: 0,
      username: "username",
      country: "italia",
      avatar: "",
    };
  },
  persist: true,
});
