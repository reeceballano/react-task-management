import React, { useState } from 'react';
import Task from './components/Task';
import Add from './components/Add';

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', status: false },
        { id: 2, name: 'Task 2', status: false },
        { id: 3, name: 'Task 3', status: true },
        { id: 4, name: 'Task 4', status: true }
    ]);

    const [task, setTask] = useState('');

    const [filteredTasks, setFilter] = useState(tasks);

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
            if(task.status === true) {
                task.status = false;
            } else {
                task.status = true;
            }
        }

        setTasks(task => [...task])
    };

    const filterTasks = (status) => {
        switch(status) {
            case 'all':
                setFilter(tasks);
                break;

            case 'completed':
                const completed = tasks.filter(item => item.status === true);
                setFilter(completed);
                break;

            case 'notDone':
                const notDone = tasks.filter(item => item.status === false);
                setFilter(notDone);
                break;

            default:
                setFilter(tasks);
                break;

        }
    };

    return(
        <div className="app">
            
            <section className="app-name">
                <h2>Task List</h2>
            </section>
            
            <section className="add-task">
                <Add task={ task } handleOnchange={ handleOnchange } handleSubmit={ handleSubmit } />
            </section>

            <section className="filter-tasks">
                <button onClick={ () => filterTasks('all')}>All</button>
                <button onClick={ () => filterTasks('completed')}>Completed</button>
                <button onClick={ () => filterTasks('notDone')}>Not Done</button>
            </section>

            <section className="task-list">
                { 
                    filteredTasks.map(item => {
                        return <Task key={ item.id } task={ item } removeTask={removeTask} updateTask={updateTask} />
                    }) 
                }
            </section>

        </div>
    )
}

export default App;