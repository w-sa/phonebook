import axios from "axios";
import * as Interfaces from "../interfaces";
const BASE_URL = "http://localhost:3001/api/persons";

const getAllEntries = () => {
  return axios.get(BASE_URL);
};

const createEntry = (object: Interfaces.Person) => {
  const request = axios.post(BASE_URL, object);
  return request.then((response) => response.data);
};

const updateEntry = (entryId: string, newNumber: string, name: string) => {
  const request = axios.put(`${BASE_URL}/${entryId}`, {
    name: name,
    number: newNumber,
  });
  return request.then((response) => response.data);
};

const deleteEntry = (entryId: string) => {
  const request = axios.delete(`${BASE_URL}/${entryId}`);
  return request.then((response) => response.data);
};

export default {
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntry,
};
