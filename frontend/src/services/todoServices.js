import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/todos',
});

export const getTodos = () => API.get('/');
export const createTodo = (todo) => API.post('/', todo);
export const updateTodo = (id, updatedTodo) => API.put(`/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/${id}`);
