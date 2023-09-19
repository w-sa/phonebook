import axios from "axios";
import * as Interfaces from "../interfaces";
const BASE_URL = "http://localhost:3001/persons";

const getAllEntries = () => {
  return axios.get(BASE_URL);
};

const createEntry = (object: Interfaces.Person) => {
  const request = axios.post(BASE_URL, object);
  return request.then((response) => response.data);
};

const updateEntry = () => {};

const deleteEntry = () => {};

export default {
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntry,
};
