import { defineStore } from "pinia";

export const useNavbarPosition = defineStore("navbar", {
  state: () => {
    return {
      show: false,
    };
  },
});
