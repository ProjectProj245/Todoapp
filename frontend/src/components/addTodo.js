import React, { useState } from 'react';
import { createTodo } from '../services/todoServices';

const AddTodo = ({ refreshTodos }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTodo({ title });
        setTitle('');
        refreshTodos();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
