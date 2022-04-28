import axios from "axios";
export const api_key = "ee6570726035619719ac043f1254da7a";
const BASE_URL = "https://api.themoviedb.org/3";
const api = axios.create({ baseURL: BASE_URL });

// api.interceptors.request.use((config) => {
//   config.params = config.params || {};
//   config.params["api_key"] = api_key;
//   return config;
// });

export default api;
