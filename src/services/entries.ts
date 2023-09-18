import axios from "axios";
const BASE_URL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(BASE_URL);
};

export default {
  getAll,
};
