import React from 'react';
import { deleteTodo, updateTodo } from '../services/todoServices';

const TodoList = ({ todos, refreshTodos }) => {
    const toggleComplete = async (todo) => {
        await updateTodo(todo._id, { completed: !todo.completed });
        refreshTodos();
    };

    const removeTodo = async (id) => {
        await deleteTodo(id);
        refreshTodos();
    };

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo._id}>
                    <span
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                        }}
                        onClick={() => toggleComplete(todo)}
                    >
                        {todo.title}
                    </span>
                    <button onClick={() => removeTodo(todo._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
