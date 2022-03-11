import axios from 'axios';

const apiBaseURL = 'http://127.0.0.1:3001';

export const api = axios.create({ baseURL: apiBaseURL });

export const fetcher = async (resource, init) => {
  const res = await api.get(resource);
  return res.data;
};

export const addTasks = async (data: object) => {
  const res = await api.post('/tasks', data);
  return res.data;
};

export const updateTasks = async (data: object, id: string) => {
  const res = await api.put(`/tasks/${id}/update`, data);
  return res.data;
};

export const deleteTask = async (id: string) => {
  const res = await api.get(`/tasks/${id}/delete`);
  return res.data;
};

export const addUser = async (data: any) => {
  const res = await api.post("/users", data);
  return res.data;
};