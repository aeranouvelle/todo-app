﻿import React from 'react';
import TodoItem from './TodoItem'; // импортируем компонент для одной задачи

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
