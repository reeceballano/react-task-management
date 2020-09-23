import React from 'react';
import Task from '../elements/Task';

const TaskSection = ({ tasks, removeTask, updateTask }) => {
    return (
        <section className="task-list">
            { 
                tasks
                    .map(item => {
                        return <Task key={ item.id } task={ item } removeTask={removeTask} updateTask={updateTask} />
                    }) 
            }
        </section>
    );
};

export default TaskSection;