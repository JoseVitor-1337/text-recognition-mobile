import axios from "axios";

const API = axios.create({
  baseURL: "https://text-recognition-node-api.herokuapp.com/",
  timeout: 5000,
});

export default API;
