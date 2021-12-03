import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.API_URL,
});
export default {
  install: function (App) {
    Object.defineProperty(App.prototype, "$axios", { value: axios });
  },
};
