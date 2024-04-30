import React, { useState } from 'react';
import './TodoList.css';

function TodoList({ isVisible }) {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task !== "") {
            const newTodos = [...todos, { text: task, isCompleted: false }];
            setTodos(newTodos);
            setTask("");
        }
    };

    const toggleCompletion = index => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const removeTask = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    if (!isVisible) {
        return null; // Do not render if not visible
    }

    return (
        <div className='todoListDiv'>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul className='todoUl'>
                {todos.map((todo, index) => (
                    <li className='todoItems' key={index} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                        <label className="round-checkbox">
                            <input
                                type="checkbox"
                                checked={todo.isCompleted}
                                onChange={() => toggleCompletion(index)}
                            />
                            <span className="checkmark"></span>
                        </label>
                        {todo.text}
                        <button className="removeButton" onClick={() => removeTask(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
