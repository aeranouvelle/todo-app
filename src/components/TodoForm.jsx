import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState(''); // состояние для ввода задачи

    const handleChange = (e) => {
        setTask(e.target.value); // обновляем состояние при изменении текста
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) { // проверяем, что задача не пустая
            addTodo(task); // передаем задачу родительскому компоненту
            setTask(''); // очищаем поле ввода
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={handleChange}
                placeholder="Введите задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoForm;
