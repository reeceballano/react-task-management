import React, { useState } from 'react';
import FilterSection from './components/sections/FilterSection';
import TaskSection from './components/sections/TaskSection';
import AddTaskSection from './components/sections/AddTaskSection';
import AppTitleSection from './components/sections/AppTitleSection';

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Learn React', status: true },
        { id: 2, name: 'Create App', status: false },
        { id: 3, name: 'Deploy', status: false },
    ]);

    const [task, setTask] = useState('');

    const [filterBy, setFilterBy] = useState('all');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(task.length <= 2) {
            return;
        }

        const newTask = { id: tasks.length + 1, name: task, status: false };
        setTasks(tasks => [...tasks, newTask]);
        setTask('');
    };

    const handleOnchange = (e) => {
        setTask(e.target.value);
    };

    const removeTask = (id) => {
        const filtered = tasks.filter(item => Number(item.id) !== Number(id));
        setTasks(filtered);
    };

    const updateTask = (id) => {
        const task = [...tasks].find(item => item.id === id);

        if(task) {
            task.status = !task.status;
        }

        setTasks(task => [...task])
    };

    const filterTasks = (status) => {
        setFilterBy(status);
    }

    const filteredTasks = () => {
        if(filterBy === 'all') {
            return tasks.filter(item => item.status === true || item.status === false);
        }

        if(filterBy === 'completed') {
            return tasks.filter(item => item.status === true);
        }

        if(filterBy === 'notDone') {
            return tasks.filter(item => item.status === false);
        }
    }

    return(
        <div className="app">
            
            <AppTitleSection appTitle='Task Manager' />

            <AddTaskSection task={ task } handleOnchange={ handleOnchange } handleSubmit={ handleSubmit } />
            
            <FilterSection filterTasks={ filterTasks } />

            <TaskSection tasks={ filteredTasks() } updateTask={ updateTask } removeTask={ removeTask } />

        </div>
    )
}

export default App;