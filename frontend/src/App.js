import React, { useEffect, useState } from 'react';
import AddTodo from './components/addTodo';
import TodoList from './components/TodoList';
import { getTodos } from './services/todoServices';

const App = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const { data } = await getTodos();
        setTodos(data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>To-Do App</h1>
            <AddTodo refreshTodos={fetchTodos} />
            <TodoList todos={todos} refreshTodos={fetchTodos} />
        </div>
    );
};

export default App;
